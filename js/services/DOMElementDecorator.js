/**
 * Created by ridel1e on 03/10/2016.
 */

class DOMElementDecorator {
  constructor (DOMElement) {
    this._element = DOMElement;
  }

  /* class manipulators */

  /**
   * Add class to DOM element
   * @param className
   */
  addClass (className) {
    this._element.className += ` ${className}`;
  }

  /**
   * Class in a element class list check
   * @param className
   * @returns {boolean}
   */
  hasClass (className) {
    return this._element.className.indexOf(` ${className}`) !== -1
  }


  /**
   * Remove class from DOM element
   * @param className
   */
  removeClass (className) {
    this._element.className = this._element.className.replace(` ${className}`, '');
  }

  /* events */

  /**
   * Add handler to mouseenter event
   * @param callback
   */
  mouseEnter (callback) {
    this._element.addEventListener('mouseenter', callback);
  }

  /**
   * Add handler to mouseleave event
   * @param callback
   */
  mouseLeave (callback) {
    this._element.addEventListener('mouseleave', callback);
  }

  /**
   * Add handlers to mouseenter and mouseleave events
   * @param mouseEnterCallback
   * @param mouseLeaveCallback
   */
  hover (mouseEnterCallback, mouseLeaveCallback) {
    this.mouseEnter(mouseEnterCallback);
    this.mouseLeave(mouseLeaveCallback);
  }

  /**
   * Add handler to focus event
   * @param callback
   */
  focus (callback) {
    this._element.addEventListener('focus', callback)
  }

  /**
   * Add handler to focusout event
   * @param callback
   */
  unfocus (callback) {
    this._element.addEventListener('focusout', callback)
  }

  /**
   * Add handler to click event
   * @param callback
   */
  click (callback) {
    this._element.addEventListener('click', callback);
  }

  /**
   * Add custom event listener to DOM element
   * @param event
   * @param callback
   */
  on (event, callback) {
    this._element.addEventListener(event, callback);
  }

  /* attribute manipulations */

  /**
   * Returns element attribute by name
   * @param attributeName
   * @returns {*|string}
   */
  getAttribute (attributeName) {
    return this._element.getAttribute(attributeName);
  }

}

export default DOMElementDecorator;