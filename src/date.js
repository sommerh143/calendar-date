export class Days{
  constructor(day){
    this.day=day
  }
  getDay(){
    if (this.day === "00"){
      return "Sunday";
    }
  }
}

