import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup ,FormControl ,FormBuilder , Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {
  associateForm : FormGroup;

  constructor(private router:Router ,private formBuilder:FormBuilder,private db:AngularFirestore,private authService: AuthService) { }

  ngOnInit() {
    this.associateForm = this.formBuilder.group({
      usertype: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      companyname: ['', Validators.required],
      doctype: ['', Validators.required],
      address: ['', Validators.required],
      scrapetype : ['', Validators.required],
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
    this.authService.signUp(this.associateForm.value.email,this.associateForm.value.password)
    .then((res)=>{
      console.log("authentication created");
      var details=this.associateForm.value;
      details["uid"]=this.authService.getUserId();
      details["role"]="associate";
      const obj=this.db.collection('associate_website').add(details)
      .then((res) => {
        console.log("data uploaded");
        this.router.navigate(['/scrape']);
    })
      .catch((err) =>  { console.log(err);});
    })
    .catch((err)=>{console.log(err);}); 
  }
}
  
