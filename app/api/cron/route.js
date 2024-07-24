import WeeklyExpense from "@/models/Expenses";
import { connectToDb } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDb();
    const res = await WeeklyExpense.deleteMany({});
    return NextResponse.json({ status: 200, message: "Deleted" });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
