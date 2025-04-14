export function getPreviousDays(numOfPrevDays, offsetFromCurrentDate) {
  const arrayOfDays = [];

  for (let i = offsetFromCurrentDate; i <= numOfPrevDays; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    arrayOfDays.push(date.toISOString().split("T")[0]);
  }
  return arrayOfDays;
}
