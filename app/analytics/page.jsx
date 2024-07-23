import { getExpenseByCategory, getExpenses } from "@/actions/getExpenseList";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import { getSession } from "@/utils/lib";
const Analytics = async () => {
  const session = await getSession();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // let total = 0;
  const calcTotal = async () => {
    const expensesArray = await Promise.all(
      days?.map(async (day) => {
        const res = await getExpenses(session.user._id, day);
        const expenses = res.expenses;
        if (expenses) {
          // console.log("expenses", expenses);
          return expenses.reduce((sum, curr) => (sum += curr.amount), 0);
        } else return 0;
      })
    );
    return expensesArray;
  };
  const eachDayTotal = await calcTotal();
  // console.log("total", eachDayTotal);
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const lineChartData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Total Expense",
        data: eachDayTotal,
        borderColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  // const allExpenses = await getExpenseByCategory(session.user._id, "Rent");
  // console.log("All user expenses ", allExpenses);
  const categories = [
    "Entertainment",
    "Food",
    "Rent",
    "Utilities",
    "Groceries",
    "Transportation",
  ];

  const eachCategoryTotal = await Promise.all(
    categories.map(async (category) => {
      const allExpenses = await getExpenseByCategory(
        session.user._id,
        category
      );
      return allExpenses.reduce((sum, curr) => (sum += curr.amount), 0);
    })
  );
  console.log("eachCategoryTotal", eachCategoryTotal);
  const barChartData = {
    labels: categories,
    datasets: [
      {
        label: "Total Expense By Categories",
        data: eachCategoryTotal,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
      },
    ],
  };
  return (
    <div className="mt-12 flex flex-col space-y-16 items-center">
      <LineChart options={options} lineChartData={lineChartData} />
      <h2 className="text-center text-2xl font-bold">
        Your Expenses This Week
      </h2>
      <BarChart options={options} barChartData={barChartData} />
      <h2 className="text-center text-2xl font-bold">
        Your Expenses This Week (By Categories)
      </h2>
    </div>
  );
};

export default Analytics;
