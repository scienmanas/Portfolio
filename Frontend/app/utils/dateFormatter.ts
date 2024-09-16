export function formatDate(date: string): string {
  // handle date formatting
  const isoDate = date;
  const dateObj = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate: string = dateObj.toLocaleDateString("en-US", options);
  return formattedDate;
}
