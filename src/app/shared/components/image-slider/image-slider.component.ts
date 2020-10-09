import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider{
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit,OnDestroy {
  @Input() sliderHeight = '160px';
  @Input() sliders: ImageSlider[] = [];
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId = null;

  @ViewChild('imageSlider', {static: true}) imageSliderRef: ElementRef;
  @ViewChildren('img') imgsRef: QueryList<ElementRef>;
  constructor(private rd2: Renderer2) { }
  ngOnInit() {
    //console.log('ngOnInit=======', this.imageSliderRef)
  }
  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit=======', this.imgsRef)
    // this.imgsRef.forEach(item => {
    //   item.nativeElement.style.height = '100px'
    // })
    this.imgsRef.forEach(item => {
      //this.rd2.setStyle(item.nativeElement, 'height', '100px')
    })

    this.intervalId = setInterval(()=> {
      this.rd2.setProperty(
        this.imageSliderRef.nativeElement, 
        'scrollLeft',
        ((this.getIndex(++this.selectedIndex)) * this.imageSliderRef.nativeElement.scrollWidth) / this.sliders.length 
      )
    }, this.intervalBySeconds * 1000)
  }
  getIndex(idx: number): number{
    console.log(idx);
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length)
  }
  handleScroll(ev){
    const radio = ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length)
    this.selectedIndex = Math.round(radio);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy=======', this.intervalId)
    clearInterval(this.intervalId);
  }

}
