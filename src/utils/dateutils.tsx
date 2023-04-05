
  export function dateRangeGenerator(star_date:Date, end_date:Date, step:number = 1): Date[] {
    let start:Date = star_date;
    let result:Date[]=[];

    while (start <= end_date) {
        result.push(start)
      start.setDate(start.getDate() + step);
    }
    return result;
  }