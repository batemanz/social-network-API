const addDateSuffix = (date) => {
  let dateString = date.toString();
  const lastCharacter = dateString.charAt(dateString.length - 1);
  if (lastCharacter === "1" && dateString !== "11") {
    dateString = `${dateString}st`;
  } else if (lastCharacter === "2" && dateString !== "12") {
    dateString = `${dateString}nd`;
  } else if (lastCharacter === "3" && dateString !== "13") {
    dateString = `${dateString}rd`;
  } else {
    dateString = `${dateString}th`;
  }
  return dateString;
};

module.exports = (
  timestamp,
  { monthLength = "short", dateSuffix = true } = {}
) => {
  const months = {
    0: monthLength === "short" ? "Jan" : "January",
    1: monthLength === "short" ? "Feb" : "February",
    2: monthLength === "short" ? "Mar" : "March",
    3: monthLength === "short" ? "Apr" : "April",
    4: monthLength === "short" ? "May" : "May",
    5: monthLength === "short" ? "Jun" : "June",
    6: monthLength === "short" ? "Jul" : "July",
    7: monthLength === "short" ? "Aug" : "August",
    8: monthLength === "short" ? "Sep" : "September",
    9: monthLength === "short" ? "Oct" : "October",
    10: monthLength === "short" ? "Nov" : "November",
    11: monthLength === "short" ? "Dec" : "December",
  };
};
