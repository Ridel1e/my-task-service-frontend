/**
 * Created by ridel1e on 03/10/2016.
 */

const yearSeasons = {
  0: 'winter',
  1: 'winter',
  2: 'spring',
  3: 'spring',
  4: 'spring',
  5: 'summer',
  6: 'summer',
  7: 'summer',
  8: 'fall',
  9: 'fall',
  10: 'fall',
  11: 'winter'
};

class CalendarDate {
  constructor (date) {
    this._date = new Date(date.year, date.month - 1, date.day);
  }

  /**
   * Returns year season name
   * @returns {String}
   */
  getYearSeason () {
    return yearSeasons[this._date.getMonth()];
  }
}

export default CalendarDate;