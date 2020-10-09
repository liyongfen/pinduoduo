import { Component, Injectable, InjectionToken, Injector, OnInit } from '@angular/core';



@Injectable()
class Product{
  constructor(private name: string, private color: string){

  }
}
@Injectable()
class PurchaseOrder{
  constructor(private product: Product, private amout: number){

  }
}




@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.sass']
})
export class HomeGrandComponent implements OnInit {
  obj = {
    productId: 1,
    productName: '手机',
    model: 's',
    type: '全面屏'
  };
  date: Date;
  newDate: Date = this.minusDays(new Date(), 3219);
  price: number;
  data: number[]
  constructor() { }

  ngOnInit() {
    this.date = new Date();
    this.price = 1232.13324322;
    this.data = [1,2,3,4,5,6];


    //const token = new InjectionToken<string>('baseUrl');
    const injector = Injector.create({
      providers: [
        {
          provide: Product,
          useFactory: ()=> {
            return new Product('大米手机', '黑色')
          },
          deps: []
        }, {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps: [Product]
        },
        // {
        //   provide: token,
        //   useValue: 'http://localhost'
        // }
      ]
    });
    console.log(injector.get(Product))
    console.log(injector.get(PurchaseOrder))
    //console.log(injector.get(token))
  }
  minusDays(date: Date, days: number){
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
