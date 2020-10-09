import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channel, ImageSlider, TopMenu } from 'src/app/shared/components';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }
  
  getTabs(){
    return this.http.get<TopMenu[]>(
      `${environment.baseUrl}/tabs`, 
    );
  }
  getChannels(){
    return this.http.get<Channel[]>(
      `${environment.baseUrl}/channels`);
  }
  getBanners(){
    return this.http.get<ImageSlider[]>(
      `${environment.baseUrl}/banners`, 
    );
  }
}

