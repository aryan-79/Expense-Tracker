"use server";
import WeeklyExpense from "@/models/Expenses";
import { getSession } from "@/utils/lib";
import { revalidatePath } from "next/cache";
export const deleteExpense = async (expenseId) => {
  const session = await getSession();
  const userId = session.user._id;
  const userExpense = await WeeklyExpense.findOne({ user: userId });
  const newUserExpenses = userExpense.expenses.filter((expense) => {
    return expenseId !== expense._id.toString();
  });
  userExpense.expenses = newUserExpenses;
  await userExpense.save();
  revalidatePath("/dashboard");
  revalidatePath("/analytics");
};
