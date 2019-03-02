import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-viewsd',
  templateUrl: './viewsd.component.html',
  styleUrls: ['./viewsd.component.css']
})
export class ViewsdComponent implements OnInit {
  list;
  constructor(private auth:AuthService,private db:AngularFirestore) { }

  ngOnInit() 
  {
    this.db.collection("user_website",ref => ref.where("role","==","associate").where("usertype","==","Scrap")).snapshotChanges().subscribe(res => {
      this.list=[];
      for(var i in res)
      {
        this.list.push(res[i].payload.doc.data());
      }
      console.log(this.list);
    });
  }
  delete(idx)
  {
    var det=this.list[idx];
    this.auth.deleteUser(det["email"],det["password"]);
  }
  logout()
  {
    this.auth.logout();
  }

}
