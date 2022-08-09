import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productname:string = "kit kat";
  Price:number= 50.50;
  quantity:number= 100;
  mfd :Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
