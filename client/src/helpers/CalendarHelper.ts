import { IAction } from "../types/actions";
import { IEvent } from "../types/events";

class CalendarHelper {
  constructor() {}
}
class CalendarAdapter {
  action: IAction;
  constructor(action: IAction) {
    this.action = action;
  }
  getEvent() {
    let event: IEvent = {
      color: "red",
      name: this.action.nomAction,
      start: this.action.dateProgramme,
      end: this.action.dateProgramme,
      timed: true
    };
    return event;
  }
}

export { CalendarAdapter, CalendarHelper };
