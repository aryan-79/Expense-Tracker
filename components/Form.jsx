"use client";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";

const Form = ({ children, ...props }) => {
  const { fields, action, submitText } = props;
  const Submit = () => {
    const status = useFormStatus();
    return (
      <button
        type="submit"
        className="bg-gray-400 mt-8 p-2 rounded-lg font-bold text-nowrap text-gray-700"
        disabled={status.pending}
      >
        {status.pending ? (
          <div className="flex gap-2">
            Submitting <LoaderCircle className="animate-spin" />
          </div>
        ) : (
          submitText
        )}
      </button>
    );
  };

  return (
    <div className="mx-auto p-2 px-8 h-[85vh] bg-gray-100 rounded-lg flex flex-col justify-center items-center gap-6 max-w-lg">
      <Image src={logo} alt="Logo" />
      <form action={action} className="w-full space-y-4">
        {fields.map((field) => (
          <div className="block space-y-2" key={field.name}>
            <label htmlFor={field.name} className="font-medium text-lg block">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              className="w-full p-2 text-gray-600 bg-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        ))}
        {children}
        <div className="w-full text-center">
          <Submit />
        </div>
      </form>
    </div>
  );
};

export default Form;
