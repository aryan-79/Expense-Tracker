"use server";
import { z } from "zod";
import { connectToDb } from "@/utils/db";
import { login, getSession } from "@/utils/lib";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export const handleLogin = async (formData) => {
  const loginFormSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password should be atleast 8 characters")
      .max(32, "Password must be less than 32 characters"),
  });

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = loginFormSchema.safeParse(data);

  if (result.success) {
    try {
      await connectToDb();
      const user = await User.findOne({ email: data.email });
      if (user) {
        const match = await bcrypt.compare(data.password, user.password);
        console.log("matched", match);
        if (match) {
          const res = await login(user);
          return res;
        } else {
          console.log("not matched");
          return {
            success: false,
            message: "Email or password is wrong",
          };
        }
      } else {
        console.log("user not found");
        return {
          success: false,
          message: "User not found",
        };
      }
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
