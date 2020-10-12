import { IAction } from "../types/actions";
import { IEvent } from "../types/events";

class CalendarHelper {
  constructor() {}
  test() {

  }
}
class CalendarAdapter {
  colors: String[];
  action: IAction;
  constructor(action: IAction) {
    this.action = action;
    this.colors = [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1"
    ]
  }
  getEvent() {
    let event: IEvent = {
      color: this.colors[this.rand(this.colors.length)],
      name: this.action.nomAction,
      start: this.action.dateProgramme,
      end: this.action.dateProgramme,
      timed: true
    };
    return event;
  }
  rand(max: number){
    return Math.floor(Math.random() * max)
  }
}
export { CalendarAdapter, CalendarHelper };
