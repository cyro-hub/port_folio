export default function convertFirebaseTimeToNormalTime(date: {
  seconds: number;
  nanoseconds: number;
}) {
  // Convert seconds to milliseconds
  const seconds = new Date(date.seconds * 1000);

  // Format the date
  const formattedDate = seconds.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}
