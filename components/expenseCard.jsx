"use client";
import { deleteExpense } from "@/actions/deleteExpense";
import { clsx } from "clsx";
import { X } from "lucide-react";
import { revalidatePath } from "next/cache";
const Card = ({ desc, amount, category, date, expenseId, variant }) => {
  return (
    <div className="md:p-2 grid grid-cols-3 md:grid-cols-[250px_repeat(3,1fr)_40px]">
      <p className={clsx("text-lg", variant === "heading" && "font-bold")}>
        {desc}
      </p>
      <p className={clsx("text-lg", variant === "heading" && "font-bold")}>
        {amount}
      </p>
      <p className={clsx("text-lg", variant === "heading" && "font-bold")}>
        {category}
      </p>
      <p className={clsx("text-lg", variant === "heading" && "font-bold")}>
        {date}
      </p>
      {variant === "heading" ? (
        <button className="invisible">Delete</button>
      ) : (
        <button
          onClick={() => {
            deleteExpense(expenseId);
          }}
        >
          <X />
        </button>
      )}
    </div>
  );
};

export default Card;
