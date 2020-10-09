import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.sass']
})
export class HomeParentComponent implements OnInit {
  @ViewChild('inputRef',{static: true}) inputRef: ElementRef;
  constructor() { }
  startDate = new Date(2020, 10, 9);
  futureDate = new Date(2020, 10, 10);
  ngOnInit() {
    fromEvent(this.inputRef.nativeElement, 'input').subscribe((ev: any)=> {
      console.log(ev.target.value);
    })
  }

}
