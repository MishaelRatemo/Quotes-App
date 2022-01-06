import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCounter'
})
export class TimeCounterPipe implements PipeTransform {

  transform(value: any): any {
    let timecount: string ='';
    let today: any = new Date();
    const aSecond = 1000;// miliseconds
    const seconds_in_a_min =60;
    const secondsInHour = 60*60;
    const secondsInDay = 60 * 60 *24; // secs x mins x 24h in a day

    var timeDifference = Math.abs(value - today)/aSecond; // get absolute value
    var days = Math.floor(timeDifference/secondsInDay);
    days >0 ? timecount += `${Math.floor(days)}days ` : false;

    timeDifference -= days*secondsInDay;
    var hours = Math.floor(timeDifference/ secondsInHour) % 24;
    hours > 0 ? timecount += `${Math.floor(hours)}hrs `: false;

    timeDifference -= hours* secondsInHour;
    var minutes = Math.floor(timeDifference/seconds_in_a_min) % 60;
    minutes >0 ? timecount +=  `${ Math.floor(minutes) }mins ` : false;

    timeDifference -= minutes* seconds_in_a_min;
    var seconds = timeDifference % 60;
    seconds > 0 ? timecount += `${ Math.floor(seconds)}secs `: false;   
    
    return timecount;
  }

    
}
