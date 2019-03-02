import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-allotedtoaggre',
  templateUrl: './allotedtoaggre.component.html',
  styleUrls: ['./allotedtoaggre.component.css']
})
export class AllotedtoaggreComponent implements OnInit {
  companyname: any;
  aggreDetails=[];
  assAggregators=[];
  user: any;

  constructor(private db:AngularFirestore,private auth:AuthService) { }

  ngOnInit() {
    this.companyname=JSON.parse(localStorage.getItem("user"))["companyname"];
    this.user=JSON.parse(localStorage.getItem("user"));
    // console.log(this.user);

    this.db.collection("pickup_aggre",ref => ref.where("userid","==",this.user["id"]).where("assigned","==",true)).snapshotChanges().subscribe(
      res => {
        for(var m in res)
        {
          var k=res[m].payload.doc.data();
          this.assAggregators.push(k);
          this.db.collection("user_website").doc(k["assignedTo"]).snapshotChanges().subscribe(
            res2 => {
              
              if(res2.payload.exists)
              {
                this.aggreDetails.push(res2.payload.data());
              }
            }
          );
        }
      }
    );
    console.log(this.assAggregators);
    console.log(this.aggreDetails);

  }
  logout()
  {
    this.auth.logout();
  }

}
