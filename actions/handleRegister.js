"use server";
import { z } from "zod";
import { connectToDb } from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const handleRegister = async (prevState, formData) => {
  const registerSchema = z
    .object({
      name: z.string().min(1, "Please enter your name."),
      email: z.string().email(),
      password: z
        .string()
        .min(8, "Password must be atleast 8 characters")
        .max(32, "Password must be less than 32 characters"),
      confirmPassword: z
        .string()
        .min(8, "Password must be atleast 8 characters")
        .max(32, "Password must be less than 32 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
    });

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const result = registerSchema.safeParse(data);

  if (result.success) {
    try {
      await connectToDb();
      const hashedPassword = await bcrypt.hash(data.password, 10);
      // console.log("hashed password: ", hashedPassword);
      const newUser = new User({ ...data, password: hashedPassword });
      s;
      await newUser.save();
      return {
        success: true,
        message: "Registered successfully",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  } else {
    return {
      success: false,
      message: result.error.issues[0].message,
    };
  }
};
