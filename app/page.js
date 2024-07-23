import lineChart from "@/public/line-chart.svg";
import Image from "next/image";
import pieChart from "@/public/pie-chart.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-4 h-[85vh]">
      <section className="basis-1/2 flex flex-col gap-6 justify-center">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="font-bold text-4xl md:text-6xl text-center">
            Track Your Daily Expenses
          </h1>
          <h3 className="font-normal text-xl">
            With{" "}
            <span className="font-bold text-2xl text-blue-700">
              Expense Tracker
            </span>
          </h3>
          <p className="w-3/4 p-4 md:px-0 text-center text-slate-700">
            Track your expenses.
            <span className="text-blue-700">
              Review your spendings with analytics.
            </span>{" "}
            Know where your earnings go.
            <span className="font-bold">And more with our expense tracker</span>
          </p>
          <div className="flex justify-between items-center gap-8">
            <Link
              href="/"
              className="bg-slate-200 px-4 py-2 rounded-xl text-black hover:bg-slate-400"
            >
              Contact Us
            </Link>
            <Link
              href="/dashboard"
              className="bg-indigo-600 px-4 py-2 rounded-xl text-white hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className="hidden md:grid basis-1/2 place-items-center relative overflow-hidden">
        <Image src={lineChart} alt="line-chart" />
        <Image
          src={pieChart}
          className="absolute right-0 -bottom-[150px] opacity-70 -rotate-45"
          alt="pie-chart"
        />
      </section>
    </div>
  );
}
