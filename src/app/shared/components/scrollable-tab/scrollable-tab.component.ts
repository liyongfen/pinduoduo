import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';

export interface TopMenu {
  id: number,
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent implements OnInit {
  title = '拼多多';
  selectedIndex = 0;
  @ViewChild('selectedRef') selectedRef11: ElementRef; 
  @Input() topMenu: TopMenu[]= [];
  @Output() onSelected = new EventEmitter()
  /**
   * 构造函数首先被调用
   */
  constructor() { 
    console.log('组件构造函数');
  }
  /**
   * 在组件`@input`属性发生变化时调用
   * @param changes 索引对象，key是属性的名字，value是SimpleChanges
   */
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('组件输入属性改变',changes);
  }
  /**
   * 组件初始化完成，在这个函数中，我们可以安全的使用
   */
  ngOnInit(): void {
    //console.log('组件初始化');
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    //console.log('组件脏值检测');
  }
  /**
   * 组件内容初始化
   */
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    //console.log('组件内容初始化');
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    //console.log('组件内容脏值检测');
  }
  /**
   * 组件视图初始化
   */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //console.log('组件视图初始化');
  }
  /**
   * 组件视图脏值检测
   */
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    //console.log('组件视图脏值检测');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //console.log('组件销毁');
  }
  handleSelection(index: number){
    this.selectedIndex = index;
    this.onSelected.emit(this.topMenu[index]);
  }


}