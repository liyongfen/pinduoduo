import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Channel, ImageSlider, ImageSliderComponent } from 'src/app/shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  username = '';
  @ViewChild('imageSlider') imageSliderRef: ImageSliderComponent;
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  selectedTabLink$: Observable<string>;
  sub: Subscription;
  constructor(
    private route: ActivatedRoute, 
    private service: HomeService, 
    private cd: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数：', params);
    })
    this.channels$ = this.service.getChannels();
    this.imageSliders$ = this.service.getBanners()
    // this.route.paramMap.subscribe(params => {
    //   console.log('路径参数：', params);
    //   this.selectedTabLink$ = params.get('tabLink');
    //   this.cd.markForCheck();
    // })
    // this.service.getBanners().subscribe((imageSliders)=> {
    //   this.imageSliders = imageSliders;
    //   this.cd.markForCheck();
    // });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
