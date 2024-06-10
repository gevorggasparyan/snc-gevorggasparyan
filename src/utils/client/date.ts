export const formatFullDate = (date: Date) => {
  const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

  const day = addLeadingZero(date.getDate());
  const month = addLeadingZero(date.getMonth() + 1); // Months are zero-based
  const year = date.getFullYear();

  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());

  return `${day}-${month}-${year} : ${hours}:${minutes}:${seconds}`;
};
