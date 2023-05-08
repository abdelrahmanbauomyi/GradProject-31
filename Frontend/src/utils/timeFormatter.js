export default function timeFormatter(time) {
  const date = new Date(time);
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    timeZone: "Africa/Cairo",
    hour: "2-digit",
    minute: "2-digit",
  };
  const dateString = date.toLocaleDateString("en-US", options);
  return `${dateString}`;
}
