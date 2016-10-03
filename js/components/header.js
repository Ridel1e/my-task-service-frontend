/**
 * Created by ridel1e on 03/10/2016.
 */

import DOMElementDecorator from '../services/DOMElementDecorator';

const search = new DOMElementDecorator(
  document.getElementsByClassName('header__search')[0]);
const HEADER_SEARCH_FOCUSED_CLASS = 'header__search_focused';

search.focus(() => search.addClass(HEADER_SEARCH_FOCUSED_CLASS));
search.unfocus(() => search.removeClass(HEADER_SEARCH_FOCUSED_CLASS));