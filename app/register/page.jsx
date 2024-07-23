"use client";
import { handleRegister } from "@/actions/handleRegister";
import Form from "@/components/Form";
import { useFormState } from "react-dom";
import { clsx } from "clsx";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [state, formAction] = useFormState(handleRegister, {});
  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [state]);
  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "text",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
    },
  ];
  return (
    <Form fields={fields} action={formAction} submitText="Register">
      {state.message && (
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

export default RegisterPage;
