
  export function dateRangeGenerator(start:Date, end:Date): string[] {
    const dates: string[] = [];

    for(let currentDate = start; currentDate <= end; currentDate.setDate(currentDate.getDate() + 1)) {
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');  // months are 0-based in JavaScript
      const day = String(currentDate.getDate()).padStart(2, '0');
      dates.push(`${year}-${month}-${day}`);
    }
    console.log("dates\n")
    console.log(dates)
    return dates;
  }
