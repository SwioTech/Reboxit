import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'

@Component({
  selector: 'app-createsubs',
  templateUrl: './createsubs.component.html',
  styleUrls: ['./createsubs.component.css']
})
//
export class CreatesubsComponent implements OnInit {
  cat: FormGroup;
  subcat: FormGroup;
  listOfCategories;

  constructor(private fb:FormBuilder,private auth:AuthService,private db:AngularFirestore) { }

  ngOnInit()
  {
    localStorage.removeItem("subthumblink");
    localStorage.removeItem("thumblink");
    this.cat=this.fb.group({
      cat:['',Validators.required],
      catthumb:['',Validators.required]

    });
    this.subcat=this.fb.group({
      category:['',Validators.required],
      subcatname:['',Validators.required],
      subthumb:['',Validators.required],
      price:['',Validators.required]
    });
    this.db.collection("products").snapshotChanges().subscribe(res => {
      this.listOfCategories=[];
      for(var i in res)
      {
        this.listOfCategories.push(res[i].payload.doc.id);
      }
    })
  }
  upfilesubcat($event)
  {
    let fire=firebase.storage().ref("thumbnails/"+this.subcat.value["subcatname"]).put($event.target.files[0]);
    fire.on(firebase.storage.TaskEvent.STATE_CHANGED,(snap)=>{
      console.log((snap["bytesTransferred"] / snap["totalBytes"]) * 100);
    },
    (error) => {console.log(error)},
    function()
    {
      fire.snapshot.ref.getDownloadURL().
      then(function(url){
        localStorage.setItem("subthumblink",url);
      }).
      catch(function(){
        console.log("failed to upload");
      });
    }
    );
  }
  upfilescat($event)
  {
    let fire=firebase.storage().ref("thumbnails/"+this.subcat.value["subcatname"]).put($event.target.files[0]);
    fire.on(firebase.storage.TaskEvent.STATE_CHANGED,(snap)=>{
      console.log((snap["bytesTransferred"] / snap["totalBytes"]) * 100);
    },
    (error) => {console.log(error)},
    function()
    {
      fire.snapshot.ref.getDownloadURL().
      then(function(url){
        localStorage.setItem("thumblink",url);
        console.log("fininshed and now enabling");
      }).
      catch(function(){
        console.log("failed to upload");
      });
    }
    );

  }
  createSubcat()
  {
    this.db.collection("products").doc(this.subcat.value["category"]).get().subscribe(res => {
      if(res.exists)
      {
        var meh=res.data();
        meh[this.subcat.value["subcatname"]]=this.subcat.value["price"];
        meh[this.subcat.value["subcatname"]+"_thumb"]=localStorage.getItem("subthumblink");
        this.db.collection("products").doc(this.subcat.value["category"]).set(meh).then(function(){
          console.log("success");
          window.location.reload();

        }).catch(function(){
          console.log("failed");

        })
      }
    });
  }
  createCat()
  {
    this.db.collection("products").doc(this.cat.value["cat"]).set({"thumb":localStorage.getItem("thumblink")}).then(function(){
      console.log("successfully added");
      window.location.reload();
    }).
    catch(function(){
      console.log("failed");
    });
  }
  checksubcat()
  {
    console.log("called me");
    if(localStorage.getItem("subthumblink") && this.subcat.valid)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  checkcat()
  {
    console.log("called me");
    if(localStorage.getItem("thumblink") && this.cat.valid)
    {
      return false;
    }
    else
    {
      return true;
    } 
  }

}
