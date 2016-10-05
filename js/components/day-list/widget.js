/**
 * Created by ridel1e on 04/10/2016.
 */

import * as constants from './constants';
import DOMElementDecorator from '../../services/DOMElementDecorator';
import CalendarDate from '../../services/calendar-date';

const dayCards = Array.prototype
  .map.call(document.querySelectorAll('.day-card'),
    (dayCard) => new DOMElementDecorator(dayCard));

dayCards
  .forEach((dayCard) => {

    const date = dayCard.getAttribute(constants.CALENDAR_DATE_ATTRIBUTE);
    const yearSeason = getYearSeason(date);
    
    dayCard.addClass(constants.YEAR_SEASONS_CLASSES[yearSeason]);
    dayCard.hover(
      () => dayCard.addClass(constants.DAY_CARD_HOVERED_CLASS),
      () => dayCard.removeClass(constants.DAY_CARD_HOVERED_CLASS)
    );
  });


function getYearSeason(dateString) {
  const dateArray = dateString.split('-');

  const calendarDate = new CalendarDate({
    year: dateArray[0],
    month: dateArray[1],
    day: dateArray[2]
  });

  return calendarDate.getYearSeason();
}