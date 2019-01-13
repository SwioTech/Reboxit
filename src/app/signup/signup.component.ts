import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup ,FormControl ,FormBuilder , Validators} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm :FormGroup;

  constructor(private router:Router, private formBuilder : FormBuilder,private db:AngularFirestore,private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
       usertype: ['', Validators.required],
       username: ['', Validators.required],
       password: ['', [Validators.required, Validators.minLength(8)]],
       email: ['', Validators.required],
       phone: ['', Validators.required],
  });
  }
  
  showLogin(){
    this.router.navigate(['/design']);
  }
  showSignup(){
    this.router.navigate(['/signup']);
  }
  showAsso(){
    this.router.navigate(['/associate']);
  }

  onSubmit()
  {
    this.authService.signUp(this.signupForm.value.email,this.signupForm.value.password)
    .then((res)=>{
      console.log("authentication created");
      var details=this.signupForm.value;
      details["uid"]=this.authService.getUserId();
      details["role"]="user";
      const obj=this.db.collection('user_website').add(details)
      .then((res) => {
        console.log("data uploaded");
        this.router.navigate(['/design']);
    })
      .catch((err) =>  { console.log(err);});
    })
    .catch((err)=>{console.log(err);}); 
  }
}
