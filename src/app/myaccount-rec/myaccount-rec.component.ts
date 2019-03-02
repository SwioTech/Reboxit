import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-myaccount-rec',
  templateUrl: './myaccount-rec.component.html',
  styleUrls: ['./myaccount-rec.component.css']
})
export class MyaccountRecComponent implements OnInit {
  history: any[];
  user: any;
  cart: any[];
  presentcart: any;
  companyname: any;

  constructor(private db:AngularFirestore,private modalService: NgbModal,private auth:AuthService) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("user"));
    this.companyname=this.user["companyname"];
    console.log(this.user);
    this.db.collection("pickup_rec",ref => ref.where("userid","==",this.user["id"])).snapshotChanges().subscribe(res => {
      this.history=[];
      this.cart=[];
      for(var i in res)
      {
        this.history.push(res[i].payload.doc.data());
        this.cart[i]=[[this.history[i]["scraptype"],this.history[i]["totalwt"]]];
      }
      console.log(this.history);
      console.log(this.cart);
    });
  }
  open(content,id) 
  {
    this.presentcart=this.cart[id];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    });
  }

  logout()
  {
    this.auth.logout();
  }
}
