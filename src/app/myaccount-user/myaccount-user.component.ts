import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-myaccount-user',
  templateUrl: './myaccount-user.component.html',
  styleUrls: ['./myaccount-user.component.css']
})
export class MyaccountUserComponent implements OnInit {
  user;
  history=[];
  cart=[];

  presentcart;
  constructor(private db:AngularFirestore,private modalService: NgbModal,private auth:AuthService) { }



  open(content,id) 
  {
    this.presentcart=this.cart[id];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    });
  }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
    this.db.collection("pickup_user",ref => ref.where("userid","==",this.user["id"])).snapshotChanges().subscribe(res => {
      this.history=[];
      this.cart=[];
      for(var i in res)
      {
        this.history.push(res[i].payload.doc.data());
        this.cart[i]=[];
        if(this.history[i]["collected"] == true)
        {
          var k=JSON.parse(this.history[i]["cart"]);
          for(var m in k)
          {
            this.cart[i].push([m,k[m]]);
          }
        }
        else{
          var k=JSON.parse(this.history[i]["cart"]);
          for(var m in k)
          {
            this.cart[i].push([m,k[m][0]]);
          }

        }
      }
      console.log(this.history);
      console.log(this.cart);
    });
  }
  logout()
  {
    this.auth.logout();
  }

}
