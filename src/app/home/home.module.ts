import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeAuxComponent, HomeChildComponent, HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeParentComponent } from './components';
import { 
  //HomeService, 
  BASE_URL_TOKEN } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    HomeChildComponent,
    HomeParentComponent,
  ],
  providers: [
    //HomeService,
    {
      provide: BASE_URL_TOKEN,
      useValue: 'http://localhost.dev'
    }
    // {
    //   provide: Product,
    //   useFactory: ()=> {
    //     return new Product('大米手机', '黑色')
    //   },
    //   deps: []
    // },
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
