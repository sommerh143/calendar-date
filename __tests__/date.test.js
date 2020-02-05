import {Days} from "../src/date"
import {inputDate} from "../src/inputDate"

describe('Days', () => {
  let day;
  beforeEach(() => {
    day = new Days("00")
  });

  test("should return the day for 00", () => {
    expect(day.getDay()).toEqual("Sunday")
  });
});

describe('inputDate', () =>{
  let date;
  beforeEach(() => {
    date = new inputDate("02", "04", "2021")
  });

  test("should return day of the day, month, and the year", () => {
    expect(date.getResult()).toEqual("02042021")
  });

});