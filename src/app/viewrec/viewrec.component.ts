import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-viewrec',
  templateUrl: './viewrec.component.html',
  styleUrls: ['./viewrec.component.css']
})
export class ViewrecComponent implements OnInit {
  list: any[];

  constructor(private auth:AuthService,private db:AngularFirestore) { }

  ngOnInit() 
  {
    this.db.collection("user_website",ref => ref.where("role","==","associate").where("usertype","==","Recycler")).snapshotChanges().subscribe(res => {
      this.list=[];
      for(var i in res)
      {
        this.list.push(res[i].payload.doc.data());
      }
      console.log(this.list);
    });
  }
  logout()
  {
    this.auth.logout();
  }
  delete(idx)
  {
    var det=this.list[idx];
    this.auth.deleteUser(det["email"],det["password"]);
  }

}
