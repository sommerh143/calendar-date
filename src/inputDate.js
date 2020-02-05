export class inputDate {
  constructor(day, month, year){
    this.day = day,
    this.month = month,
    this.year = year
  }

  getResult(){
    if (this.day == "02" && this.month == "04" && this.year == "2021"){
      return this.day + this.month + this.year;
    }
  }
}