import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;


  constructor(private _firebaseAuth: AngularFireAuth, private router: Router,private db:AngularFirestore) { 
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }
  signInRegular(email,password)
  {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password ); 
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email,password)
  {
    return firebase.auth().createUserWithEmailAndPassword(email,password);
  }
  isLoggedIn()
  {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
  }
  logout() 
  {
    this._firebaseAuth.auth.signOut()
    .then((res) => {
      console.log("signed out successfully");
      localStorage.removeItem("user");
      this.router.navigate(["/design"]);
    });
  }
  deleteUser(email,password)
  {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,password).
    then(function(){
      firebase.auth().currentUser.delete().
      then(function(){
        console.log("deleted from authentication");
        var ref=firebase.firestore().collection("user_website").where("email","==",email);
        ref.get().then(function(q){
          q.forEach(function(doc){
            doc.ref.delete();
          })
          console.log("deleted from database");
        }).catch();
      }).
      catch(function(){
        console.log("failed to deleted");
        return false;
      });
    }).
    catch(function(){
      console.log("failed with signin");
      return false;
    });
  }


}
