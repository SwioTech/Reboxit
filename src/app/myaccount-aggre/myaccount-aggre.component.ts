import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-myaccount-aggre',
  templateUrl: './myaccount-aggre.component.html',
  styleUrls: ['./myaccount-aggre.component.css']
})
export class MyaccountAggreComponent implements OnInit {
  history: any[];
  user: any;
  cart: any[];
  presentcart: any;

  constructor(private db:AngularFirestore,private modalService: NgbModal,private auth:AuthService) { }

  ngOnInit() 
  {
    this.user=JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
    this.db.collection("pickup_aggre",ref => ref.where("userid","==",this.user["id"])).snapshotChanges().subscribe(res => {
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
