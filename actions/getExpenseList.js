"use server";

import WeeklyExpense from "@/models/Expenses";
import { connectToDb } from "@/utils/db";

export const getExpenses = async (userId, dayOfWeek) => {
  const weeklyExpenses = await WeeklyExpense.findOne({
    user: userId,
    dayOfWeek,
  });
  // console.log("weekly expenses", weeklyExpenses);

  if (weeklyExpenses) {
    return weeklyExpenses;
  } else {
    return [];
  }
};

export const getExpenseByCategory = async (userId, category) => {
  try {
    const results = await WeeklyExpense.find({
      user: userId,
    });
    // console.log("results", results);
    let filteredResult = [];
    results.map((result) => {
      filteredResult.push(
        result.expenses.filter((expense) => expense.category === category)
      );
    });
    console.log(`filtered result ${category} : ${filteredResult}`);
    filteredResult = filteredResult.filter((item) => item);
    // console.log("filteredResult fib", filteredResult);

    return filteredResult;
  } catch (error) {
    console.log(error);
    return { message: "No result found" };
  }
};

export const getAllExpenses = async ({ userId }) => {
  try {
    await connectToDb();
    const allExpenses = await WeeklyExpense.find({ user: userId });
    if (allExpenses) {
      // console.log("all expenses ", allExpenses);
      return allExpenses;
    } else {
      return [];
    }
  } catch (error) {}
};
