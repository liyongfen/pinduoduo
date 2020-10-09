import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider, ImageSliderComponent } from 'src/app/shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  username = '';
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  @ViewChild('imageSlider') imageSliderRef: ImageSliderComponent;
  selectedTabLink;
  constructor(
    private route: ActivatedRoute, 
    private service: HomeService, 
    private cd: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('路径参数：', params);
      this.selectedTabLink = params.get('tabLink');
      this.cd.markForCheck();
    })
    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数：', params);
    })
    this.service.getChannels().subscribe((channels)=> {
      this.channels = channels;
      this.cd.markForCheck();
    });
    this.service.getBanners().subscribe((imageSliders)=> {
      this.imageSliders = imageSliders;
      this.cd.markForCheck();
    });
  }
  
  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit========', this.imageSliderRef)
  }
}
