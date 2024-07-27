"use server";
import WeeklyExpense from "@/models/Expenses";
import { connectToDb } from "@/utils/db";
import { getSession } from "@/utils/lib";
import { revalidatePath } from "next/cache";
export const deleteExpense = async (expenseId) => {
  const session = await getSession();
  const userId = session.user._id;
  try {
    await connectToDb();
    let userExpenses = await WeeklyExpense.find({ user: userId });

    userExpenses.forEach(async (item) => {
      item.expenses = item.expenses.filter(
        (expense) => expense._id.toString() !== expenseId
      );
      await item.save();
    });

    console.log("new user expenses:", userExpenses);
    revalidatePath("/dashboard");
    revalidatePath("/analytics");
  } catch (err) {
    console.log("err", err);
  }
};
