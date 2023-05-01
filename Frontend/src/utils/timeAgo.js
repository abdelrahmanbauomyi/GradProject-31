/*
CREDITS: https://gist.github.com/codeincontext/1285806/c47a3b1cdcab3e0bf2b22ddd4a7720e63e166c89
*/
export default function timeAgo(timestamp) {
  if (!timestamp) {
    return "";
  }
  if (typeof timestamp === "string") {
    timestamp = new Date(timestamp);
  }
  const units = [
    { name: "second", limit: 60, in_seconds: 1 },
    { name: "minute", limit: 3600, in_seconds: 60 },
    { name: "hour", limit: 86400, in_seconds: 3600 },
    { name: "day", limit: 345600, in_seconds: 86400 },
  ];
  let diff = (new Date().getTime() - timestamp.getTime()) / 1000;
  if (diff < 5) return "a few moments ago";
  let _ago;
  for (const unit of units) {
    if (diff < unit.limit) {
      diff = Math.floor(diff / unit.in_seconds);
      _ago = diff + " " + unit.name + (diff > 1 ? "s" : "");
      break;
    }
  }
  if (_ago) {
    return _ago + " ago";
  } else {
    return timestamp.toLocaleDateString();
  }
}
