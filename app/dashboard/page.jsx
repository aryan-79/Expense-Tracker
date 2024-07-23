import { getAllExpenses } from "@/actions/getExpenseList";
import Card from "@/components/expenseCard";
import { getSession } from "@/utils/lib";

const formatForCardRender = (allExpenses) => {
  const data = [];
  allExpenses.map((item) => {
    const expenses = item.expenses;
    const date = item.date;
    expenses.map((expense, index) => {
      data.push({
        key: expense._id.toString(),
        desc: expense.desc,
        amount: expense.amount,
        category: expense.category,
        date: date,
      });
    });
  });
  return data;
};
const Dashboard = async () => {
  const session = await getSession();
  const userId = session.user._id;
  const allExpenses = await getAllExpenses({ userId });
  const res = formatForCardRender(allExpenses);
  return (
    <div className="mt-12 [&>*:nth-child(even)]:bg-gray-100">
      <h1 className="font-bold text-2xl mb-10">Your Expenses</h1>
      <Card
        desc="Descriptiion"
        amount="Amount"
        category="Category"
        date="Date"
        variant="heading"
      />
      {res.map((item) => (
        <Card
          key={item.key}
          desc={item.desc}
          amount={item.amount}
          category={item.category}
          date={item.date}
          expenseId={item.key}
        />
      ))}
    </div>
  );
};

export default Dashboard;
