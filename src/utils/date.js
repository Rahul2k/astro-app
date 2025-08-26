export const getToday = () => {
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth(); 
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  return `${dd} ${MonthMap[mm]}, ${yyyy}`;
};

const MonthMap = {
    0 : "January",
    1 : "February", 
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10: "November",
    11: "December"
};
