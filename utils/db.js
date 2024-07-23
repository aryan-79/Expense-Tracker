import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  if (isConnected) {
    console.log("Database is already connected.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Expense_Tracker",
    });
    isConnected = true;
    console.log("Db connected successfully.");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
