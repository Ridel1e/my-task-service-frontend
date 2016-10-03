/**
 * Created by ridel1e on 03/10/2016.
 */

import DOMElementDecorator from '../services/DOMElementDecorator';
import CalendarDate from '../services/calendar-date'

const dayCards = Array
  .prototype
  .map.call(
    document.getElementsByClassName('day-card'),
    (dayCard) => new DOMElementDecorator(dayCard));

const DAY_CARD_HOVERED_CLASS = 'day-card_hovered';
const CALENDAR_DATE_ATTRIBUTE = 'calendar-date';
const yearSeasonClasses = {
  fall: 'day-card_theme_fall',
  winter: 'day-card_theme_winter',
  spring: 'day-card_theme_spring',
  summer: 'day-card_theme_summer'
};


dayCards
  .forEach((dayCard) => {
    const yearSeason = getYearSeason(dayCard);

    dayCard.addClass(yearSeasonClasses[yearSeason]);

    dayCard.hover(
      () => dayCard.addClass(DAY_CARD_HOVERED_CLASS),
      () => dayCard.removeClass(DAY_CARD_HOVERED_CLASS)
    );
  });


function getYearSeason(dayCard) {
  const dateString = dayCard.getAttribute(CALENDAR_DATE_ATTRIBUTE);
  const dateArray = dateString.split('-');

  const calendarDate = new CalendarDate({
    year: dateArray[0],
    month: dateArray[1],
    day: dateArray[2]
  });

  return calendarDate.getYearSeason();
}