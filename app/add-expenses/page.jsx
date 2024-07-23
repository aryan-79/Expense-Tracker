"use client";
import { addExpense } from "@/actions/addExpense";
import Form from "@/components/Form";
import Select from "@/components/Select";
import { useState } from "react";
import { useFormState } from "react-dom";
import { clsx } from "clsx";

const AddExpenses = () => {
  const fields = [
    {
      label: "Description",
      name: "desc",
      type: "text",
    },
    {
      label: "Amount",
      name: "amount",
      type: "number",
    },
  ];
  const [category, setCategory] = useState("Entertainment");
  const [state, formAction] = useFormState(addExpense, {
    success: false,
    message: "",
  });
  return (
    <Form action={formAction} fields={fields} submitText="Add Expense">
      <Select name="category" category={category} setCategory={setCategory} />
      <input
        type="text"
        name="category"
        className="hidden"
        value={category}
        onChange={category}
      />
      {state?.message && (
        <p
          className={clsx(
            "text-gray-200 text-center p-1 rounded-lg",
            state.success ? "bg-green-500" : "bg-red-500"
          )}
        >
          {state.message}
        </p>
      )}
    </Form>
  );
};

export default AddExpenses;
