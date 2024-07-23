export const getDay = () => {
  const now = new Date();
  const day = now.getDay();
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      throw new Error("value out of bound");
  }
};

export const getDate = () => {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  return date;
};
