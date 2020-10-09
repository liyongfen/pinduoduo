import { AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TopMenu } from 'src/app/shared/components';
import { HomeService, BASE_URL_TOKEN } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.sass'],
  providers: [
    {
      provide: BASE_URL_TOKEN,
      useValue: 'http://localhost.dev'
    }
  ]
})
export class HomeContainerComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router, 
    private service: HomeService,
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) {}
  topMenu: TopMenu[] = [];
  ngOnInit(): void {
    this.service.getTabs().subscribe((tabs)=> {
      this.topMenu =  tabs;
    });
    console.log(this.baseUrl);
  }
  ngAfterViewInit(): void {
  }
  handleTabSelected(menu: TopMenu){
    this.router.navigate(['home', menu.link])
  }
  

}
