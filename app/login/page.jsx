"use client";
import { handleLogin } from "@/actions/handleLogin";
import Form from "@/components/Form";
import Link from "next/link";
import { useFormState } from "react-dom";
import { clsx } from "clsx";
import { redirect } from "next/navigation";
const LoginPage = () => {
  const [state, formAction] = useFormState((prevState, formData) => {
    handleLogin(formData);
    redirect("/dashboard");
  }, {});
  const fields = [
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
  ];
  return (
    <Form fields={fields} action={formAction} submitText="Login">
      <p>
        Don&apos;t have an account?{" "}
        <span className="text-blue-600">
          <Link href="/register">Register here</Link>
        </span>
      </p>
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

export default LoginPage;
