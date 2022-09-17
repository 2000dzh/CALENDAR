module.exports = {
  createDecadeYears (year) {
    return Array.from({ length: 10 }, function (item, index) {
      return Number(this.str + index)
    }, {
      str: year.toString().slice(0, 3)
    })

  }
}