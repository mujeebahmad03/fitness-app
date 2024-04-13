export const daysOfTheWeek = [...Array(7).keys()].map((day) => {
  const date = new Date();
  date.setDate(date.getDate() + day - date.getDay() + 1);
  return date.toLocaleDateString("en-US", { weekday: "long" });
});
