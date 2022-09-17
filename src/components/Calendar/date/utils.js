//获取当前月份1号是星期几
export function getFirstWeekDay (year, month) {
  const date = new Date(year, month - 1, 1);
  return date.getDay();
}

//获取当前月份有多少天
export function getMonthDayCount (year, month) {
  const date = new Date(year, month, 0);
  return date.getDate();
}

//获取上一月份在当前月显示几天
export function getLastMonthRestDays (year, month) {
  const days = getFirstWeekDay(year, month);
  const lastDate = getMonthDayCount(year, month - 1);
  const restDays = [];

  for (let i = 0; i < days; i++) {
    restDays.unshift(lastDate - i);
  }

  return restDays;
}

//获取下一月份在当前月显示几天
export function getNextMonthRestDays (year, month) {
  const lastMonthRestDaysCount = getFirstWeekDay(year, month);
  const currentMonthDayCount = getMonthDayCount(year, month);
  const nextMonthRestDayCount = 42 - (lastMonthRestDaysCount + currentMonthDayCount);
  let restDays = [];

  for (let i = 1; i <= nextMonthRestDayCount; i++) {
    restDays.push(i);
  }

  return restDays;
}



export function getFormatDate (year, month, date) {
  const dateArr = [year, month, date];

  for (let i = 1; i < dateArr.length; i++) {
    dateArr[i] < 10 && (dateArr[i] = `0${dateArr[i]}`);
  }

  return dateArr.join('-');
}
