/**
* @memberof Element
* @since 0.0.1
* @description Trigger event
* @author Jimmy Latour <lelabodudev@gmail.com>
* @param {string} name The name of event
* @return {void}
*/
Element.prototype.triggerEvent = function(name) {
  var event; // The custom event that will be created

  if (document.createEvent) {
    event = document.createEvent("HTMLEvents");
    event.initEvent(name, true, true);
  } else {
    event = document.createEventObject();
    event.eventType = name;
  }

  event.eventName = name;

  if (document.createEvent) {
    this.dispatchEvent(event);
  } else {
    this.fireEvent("on" + event.eventType, event);
  }
}
