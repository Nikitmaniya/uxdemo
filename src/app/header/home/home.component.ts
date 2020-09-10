import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'myapp';
  public data;
  item: any;
  name:string;
  pro: any;
  valid: any;
  characters: boolean = false;
  houses: boolean = false;
  books: boolean = false;
  isvalid: Boolean = true;
  apidata: any;
  public buttonName: any = 'Show';
  isShow = true;
  ishome = false;
  public show: boolean = true;
  constructor(private http: ApiService) {

  }
  getresponse(typevariable) {
    this.http.getData(typevariable).subscribe((resp) => {
      // console.warn(resp)
      this.apidata = resp['data'];
      this.isShow = false;
      this.ishome = true;




    })
  }
  msg: string = "";
  mycart(test) {
    this.msg = test.target.value + " Product is Add";
  }

  mytest(my) {
    console.log(my.value);


  }

  product = [
    { id: 1, image: "https://in-media.apjonlinecdn.com/catalog/product/cache/314dec89b3219941707ad62ccc90e585/3/M/3M001PA-1_T1594092115.png", name: "laptop", Productid: 35, price: 35000 },
    { id: 2, image: "https://www.91-img.com/pictures/133324-v5-oppo-a1k-mobile-phone-large-1.jpg?tr=q-60", name: "Mobile", Productid: 78, price: 20000 },
    { id: 3, image: "https://images-na.ssl-images-amazon.com/images/I/81t2A6uhm4L._SL1500_.jpg", name: "TV", Productid: 48, price: 13500 },
    { id: 4, image: "https://images-na.ssl-images-amazon.com/images/I/71TEK35jcRL._SL1500_.jpg", name: "Bike", Productid: 29, price: 60000 }
  ]

  users = [];
  getuser(uname){
    this.users.push({
      name:uname.value
    });
    // this.users = [...this.users , {name: uname.value}]
  }

  clickremove(){
    this.users.splice(this.users.length -1)
  }


  ngOnInit(): void {
  }

}

