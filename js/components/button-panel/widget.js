/**
 * Created by ridel1e on 04/10/2016.
 */

import DOMElementDecorator from '../../services/DOMElementDecorator';

const SLIDER_ACTIVE_CLASS = 'slider_active';

const createTaskButton =
  new DOMElementDecorator(document.querySelector('.header__create-task-button'));
console.log(createTaskButton);

const modalWindow =
  new DOMElementDecorator(document.querySelector('.slider'));

createTaskButton.click(() => {
  if(modalWindow.hasClass(SLIDER_ACTIVE_CLASS)) {
    modalWindow.removeClass(SLIDER_ACTIVE_CLASS);
  }
  else {
    modalWindow.addClass(SLIDER_ACTIVE_CLASS);
  }
});