/**
 * Created by ridel1e on 04/10/2016.
 */

import DOMElementDecorator from '../../services/DOMElementDecorator';

const HEADER_SEARCH_FOCUSED_CLASS = 'header__search_focused';

const search =
  new DOMElementDecorator(document.querySelector('.header__search'));

search.focus(() => search.addClass(HEADER_SEARCH_FOCUSED_CLASS));
search.unfocus(() => search.removeClass(HEADER_SEARCH_FOCUSED_CLASS));
