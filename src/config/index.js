
const usersObject = { 'Alyssa': 'Lillian', 'Lillian': 'Alyssa' };
export const senderName = (receiverName) => usersObject[receiverName];

const dateTimeoptions = {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
};

export const formatDate = (timestamp) => {
  let date = timestamp;
  if (!(timestamp instanceof Date))
    date = new Date(timestamp.seconds * 1000);
  return new Intl.DateTimeFormat("en-US", dateTimeoptions).format(date);
}
