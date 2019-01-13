import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  upi:boolean=false;
  bank:boolean=false;
  paytm;boolean=false;
  constructor() { }

  ngOnInit() {
  }


  showUpi(){
    this.upi=true;
    this.bank=false;
    this.paytm=false;
  }
  showBank(){
    this.upi=false;
    this.paytm=false;
    this.bank=true;
  }
  showPaytm(){
    this.bank=false;
    this.upi=false;
    this.paytm=true;
  }
}
