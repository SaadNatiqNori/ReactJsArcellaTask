export const getDateForNow = () => {
  return (
    new Date().getFullYear() +
    "-" +
    new Date().getMonth() +
    "-" +
    new Date().getDay() +
    "  " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes()
  );
};
