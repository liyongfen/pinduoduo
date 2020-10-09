import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import localZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationInterceptor, ParamInterceptor } from './home';

@NgModule({
  //模块中有哪些组件、指令、管道，需要声明
  declarations: [
    AppComponent,
  ],
  //依赖哪些模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [],
  //对内服务
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  //引导组件
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(localZh, 'zh')
  }
}
