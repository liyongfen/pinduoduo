import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';


export interface Channel{
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalGridComponent implements OnInit {
  //username = '';
  private _username = '';
  @Output() usernameChange = new EventEmitter();
  @Emoji() emoji = '测试';

  channels: Channel[] = [];

  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';

  constructor() { }
  ngOnInit() {
  } 

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }
  
  public get templateRows() : string {
    return `minmax(auto, max-content)`;
  }
  
  public get templateCols() : string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}))`
  }
  
  handleScroll(ev){
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}%`
  }
  
  



  @Input()
  public get username() : string {
    return this._username;
  }
  
  public set username(value : string) {
    this._username = value;
    this.usernameChange.emit(value);
  }
  @Confirmable('你确定要执行吗？')
  handleClick(){
    console.log('点击已执行')
  }
}
