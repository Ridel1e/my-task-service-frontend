/**
 * Created by ridel1e on 18/10/2016.
 */

import DOMElementDecorator from '../../services/DOMElementDecorator';
import * as constants from './constants';

const tasks = Array
  .prototype
  .map.call(document.querySelectorAll('.task'), (task) =>
    new DOMElementDecorator(task));

const editionForm = 
  new DOMElementDecorator(document.querySelector('.edition-form-container'));

tasks.forEach((task) => {
  task.hover(
    () => task.addClass(constants.TASK_HOVERED_CLASS),
    () => task.removeClass(constants.TASK_HOVERED_CLASS)
  );
  
  task.click(() => {
    if(!editionForm.hasClass(constants.EDITION_FORM_VISIBLE_CLASS)) {
      editionForm.addClass(constants.EDITION_FORM_VISIBLE_CLASS)
    }

    document.forms.editionForm.title.value = task.getAttribute('title');
    document.forms.editionForm.description.value = task.getAttribute('description');
    document.forms.editionForm.notificationTime.value = task.getAttribute('notification-time');
    document.forms.editionForm.completeDate.value = task.getAttribute('complete-date');
  });
});

