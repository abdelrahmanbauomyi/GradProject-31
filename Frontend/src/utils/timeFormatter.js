export default function timeFormatter(time) {
  const date = new Date(time);
  const options = { timeZone: "Africa/Cairo", weekday: "short" };
  const dayString = date.toLocaleDateString("en-US", options);
  const dateString = date.toLocaleDateString("en-US", {
    timeZone: "Africa/Cairo",
  });
  const timeString = date.toLocaleTimeString("en-US", {
    timeZone: "Africa/Cairo",
  });
  return `${dayString}, ${dateString}, ${timeString}`;
}
