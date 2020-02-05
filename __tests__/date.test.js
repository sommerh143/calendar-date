import {Days} from "../src/date"

describe('Days', () => {
  let day;
  beforeEach(() => {
    day = new Days("00")
  });

  test("should return the day for 00", () => {
    expect(day.getDay()).toEqual("Sunday")
  });
})