import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup ,FormControl ,FormBuilder , Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  loginForm : FormGroup;
 
  constructor(private router:Router , private formBuilder : FormBuilder,private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
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
    this.authService.signInRegular(this.loginForm.value.email, this.loginForm.value.password)
        .then((res) => {
          console.log(res);
          console.log("successful");
          this.router.navigate(['/pickup']);
        })
        .catch((err) => console.log('error: ' + err));
  }
}
