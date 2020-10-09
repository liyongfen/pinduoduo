import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective{
    @HostBinding('style.grid-area') area = 'title';
    @HostBinding('style.font-size') @Input() appGridItemTitle = '0.5rem'
    // constructor(private elr: ElementRef, private rd2: Renderer2) {}
    // ngOnInit(): void {
    //     this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
    // }
 }