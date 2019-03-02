import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-addslot',
  templateUrl: './addslot.component.html',
  styleUrls: ['./addslot.component.css']
})
export class AddslotComponent implements OnInit {
  slot;
  location: any[];

  listOfSlots=[];
  constructor(private fb:FormBuilder,private db:AngularFirestore) { }

  ngOnInit()
  {
    this.slot=this.fb.group({
      date:['',Validators.required],
      location:['',Validators.required]
    });
    this.db.collection("locations").snapshotChanges().subscribe(res =>{
      this.location=[];
      for(var i in res)
      {
        this.location.push(res[i].payload.doc.id);
      }
    })
    this.db.collection("slots_web").snapshotChanges().subscribe(res => {
      this.listOfSlots=[];
      for(var i in res)
      {
        this.listOfSlots.push(res[i].payload.doc.data());
        this.listOfSlots[i]["id"]=res[i].payload.doc.id;
      }

    });

  }
  submit()
  {

    this.db.collection("slots_web").add(this.slot.value).then(function(){
      console.log("successfully added");
      window.location.reload();
    }).
    catch(function(){
      console.log("failed");
    });
  }

}
