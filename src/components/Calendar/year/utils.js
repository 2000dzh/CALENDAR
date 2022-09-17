export function createDecadeYears (year) {
  return Array.from({ length: 10 }, function (item, index) {
    return Number(this.str + index);
  }, {
    str: year.toString().slice(0, 3)
  })

}

export function getStartAndEndYear (year) {
  const str = year.toString().slice(0, 3);
  return [Number(str + '0'), Number(str + '9')];
}