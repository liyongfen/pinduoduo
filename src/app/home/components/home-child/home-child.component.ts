import { formatDate } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.sass']
})
export class HomeChildComponent implements OnInit, AfterViewChecked {
  _title;
  _time;
  @ViewChild('timeRef', {static: true}) timeRef: ElementRef;
  constructor(private ngZone: NgZone, private rd2: Renderer2) {
    this._title = 'hi';
  }
  
  public get title() : string {
    console.log('脏值检测')
    return this._title;
  }
  
  public get time() : number {
    return this._time;
  }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    //this._title = '你好'
    this.ngZone.runOutsideAngular(()=> {
      setInterval(()=> {
        //this._time = Date.now()
        //this.timeRef.nativeElement.innerText = Date.now();
        this.rd2.setProperty(this.timeRef.nativeElement, 'innerText', formatDate(Date.now(), 'HH:mm:ss:SSS', 'zh-Hans'));
      }, 100)
    })

  }
  handleClick(ev){

  }

}
