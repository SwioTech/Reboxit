import { Component, OnInit } from '@angular/core';

import { FormGroup ,FormControl ,FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styleUrls: ['./sd.component.css']
})
export class SdComponent implements OnInit {

  request: boolean =false;
  //addit : boolean =false;
  assigned :boolean =true;
  assPick :boolean=true;
  viewCat:boolean=false;
  mySheet:boolean=false;
  addlist:boolean =false;
  actual:boolean=false;

  dataForm :FormGroup;



  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      date: ['', Validators.required],
      companyname: ['', Validators.required],
      tscrape: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
  });
  }

  showRequestForm(valid:boolean){
    this.request=true;
    this.assigned=false;
    this.assPick=false;
    this.mySheet=false;
    this.addlist=false;
    
    
  }
  // showForm(valid:boolean){
  //   this.addit=true;
  // }
  showAssign(){
    this.assigned =true;
    this.request=false;
    this.assPick=false;
    this.mySheet=false;
    this.addlist =false;
  }
  showPick(){
    this.assPick=true;
    this.assigned=false;
    this.request=false;
    this.mySheet=false;
    this.addlist =false;
  }
  viewcat(){
    this.viewCat=true;
    this.actual=false;
  }
  close(){
    this.viewCat=false;
    
  }
  showSheets(){
    this.mySheet=true;
    this.assigned=false;
    this.assPick=false;
    this.request=false;
    this.addlist =false;
  }
  addForm(){
    this.addlist=true;
  }
  showActual(){
    this.actual=true;
    this.viewCat=false;
  }
  close1(){
    this.actual=false;
    
  }

}


/**
 *                   <div class="col-md-12">
                    <div class="card">
                      <!-- <div class="card-header">
                        <h4 class="card-title"> User data</h4>
                      </div> -->
                      <div class="card-body">
                        <div class="table-responsive">
                          <table class="table table-small">
                            <thead class="" >
                              <th>
                                Name
                              </th>
                              <th>
                                  Address
                              </th>
                              <th>
                                  Phone Number
                              </th>
                              <th>
                                  Estimated kg
                                  
                              </th>
                              <th>
                                  Actual kg
                              </th>
                              <th>
                                  Date
                              </th>
                              <th>
                                 Actions
                              </th>
                              
                            </thead>
                            <tbody  >
                              <tr>
                                <td>
                                    vamshi
                                </td>
                                <td>
                                    ramnagar
                                </td>
                                <td>
                                    9966558822
                                </td>
                                <td>
                                    6 <br>
                                    <button (click)=viewcat()>view Categories</button>
                                </td>
                                <td>
                                    -
                                </td>
                               <td>
                                 10/2/2018
                               </td>
                               <td>
                                 <button class="btn btn-success">update</button>
                               </td>
                              </tr>
                             
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
 * 
 */