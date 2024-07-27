"use server";
import { z } from "zod";
import { getSession } from "@/utils/lib";
import { getDay, getDate } from "@/utils/dateUtils";
import { connectToDb } from "@/utils/db";
import WeeklyExpense from "@/models/Expenses";
import { revalidatePath } from "next/cache";

export const addExpense = async (prevState, formData) => {
  const expenseSchema = z.object({
    desc: z.string().min(1, { message: "Please add description" }),
    amount: z.coerce.number().min(1, { message: "Please check amount again" }),
    category: z.string(),
  });

  const data = {
    desc: formData.get("desc"),
    amount: formData.get("amount"),
    category: formData.get("category"),
  };

  const result = expenseSchema.safeParse(data);

  if (result.success) {
    try {
      await connectToDb();
      const session = await getSession();
      const userId = session.user._id;
      const date = getDate();
      const day = getDay();
      const newExpense = {
        desc: data.desc,
        amount: data.amount,
        category: data.category,
      };
      const weeklyExpense = await WeeklyExpense.findOne({
        user: userId,
        date: date,
      });
      if (weeklyExpense) {
        try {
          weeklyExpense.expenses.push(newExpense);
          await weeklyExpense.save();
          revalidatePath("/analytics");
          return {
            success: true,
            message: "Expense added successfully.",
          };
        } catch (err) {
          console.log(err);
          return { success: false, message: "Failed to add expense." };
        }
      } else {
        const newWeeklyExpense = new WeeklyExpense({
          user: userId,
          dayOfWeek: day,
          date: date,
          expenses: [
            {
              desc: data.desc,
              amount: data.amount,
              category: data.category,
            },
          ],
        });
        await newWeeklyExpense.save();
        revalidatePath("/analytics");

        return {
          success: true,
          message: "New expense added successfully.",
        };
      }
    } catch (err) {
      // console.log(err);
      return {
        success: false,
        message: "Failed to add expense.",
        error: err.message,
      };
    }
  } else {
    // console.log(result.error);
    return {
      success: false,
      message: result.error.issues[0].message,
    };
  }
};
