export const formatFullDate = (date: Date) => {
  const addLeadingZero = (num: number): string =>
    num < 10 ? `0${num}` : num.toString();

  const day: string = addLeadingZero(date.getDate());
  const month: string = addLeadingZero(date.getMonth() + 1); // Months are zero-based
  const year: number = date.getFullYear();

  const hours: string = addLeadingZero(date.getHours());
  const minutes: string = addLeadingZero(date.getMinutes());
  const seconds: string = addLeadingZero(date.getSeconds());

  return `${day}-${month}-${year} : ${hours}:${minutes}:${seconds}`;
};
