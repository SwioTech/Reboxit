import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl ,FormBuilder , Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
   pickupForm:FormGroup;
   username:string;
  constructor(private formBuilder : FormBuilder,private authService: AuthService) { 
  }

  ngOnInit() {
    this.pickupForm = this.formBuilder.group({
      location: ['', Validators.required],
      add1: ['', Validators.required],
      add2: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
  });
  }

}
