export const getLastVisitTime = (time: string): string => {
  const difference: number = Date.now() - Date.parse(time);
  const hours = new Date(difference).getHours();

  if (hours > 0) {
    return `${hours} часов назад`;
  }
  return `${new Date(difference).getMinutes()} минут назад`;
}
