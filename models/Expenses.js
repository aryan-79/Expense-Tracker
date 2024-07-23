import { Schema, models, model } from "mongoose";

const expenseSchema = new Schema({
  desc: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const dailyExpenseSchema = new Schema({
  user: { type: String, required: true },
  dayOfWeek: { type: String, required: true },
  date: { type: String, required: true },
  expenses: [expenseSchema],
});

const WeeklyExpense =
  models.WeeklyExpense || model("WeeklyExpense", dailyExpenseSchema);

export default WeeklyExpense;
