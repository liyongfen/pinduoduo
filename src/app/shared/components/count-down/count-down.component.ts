import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() startDate: Date = new Date();
  @Input() futureDate: Date;
  countDown$: Observable<string>;
  _MS_PRE_SECOND = 1000;
  constructor() { }

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.futureDate);
  }
  private getCountDownObservable(startDate: Date, futureDate: Date){
    return interval(1000).pipe(
      map(elapse => this.diffInSec(startDate, futureDate) - elapse),
      takeWhile(gap => gap >= 0),
      tap((val) => console.log(val)),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      map(({hour, minute, second})=> `${hour}:${minute}:${second}`),
    )
  }
  private diffInSec(startDate: Date, futureDate: Date){
    const diff = futureDate.getTime() - startDate.getTime();
    return Math.floor(diff / this._MS_PRE_SECOND);
  }
}
