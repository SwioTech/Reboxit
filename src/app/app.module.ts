import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule,Routes} from '@angular/router';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule }from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SidebarModule } from 'ng-sidebar';

import { AuthService } from './services/auth.service';



import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { DesignComponent } from './design/design.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { PickupComponent } from './pickup/pickup.component';
import { SdComponent } from './sd/sd.component';
import { CollectionsComponent } from './collections/collections.component';
import { SubCollectionComponent } from './sub-collection/sub-collection.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AssociateComponent } from './associate/associate.component';
import { CartComponent } from './cart/cart.component';
import { RecyclerComponent } from './recycler/recycler.component';
import { AggregatorComponent } from './aggregator/aggregator.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MoreComponent } from './more/more.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AdminComponent } from './admin/admin.component';
import { ScraperequestadminComponent } from './scraperequestadmin/scraperequestadmin.component';
import { AssignedaggreComponent } from './assignedaggre/assignedaggre.component';
import { AggrereqadminComponent } from './aggrereqadmin/aggrereqadmin.component';
import { RecyclereqadminComponent } from './recyclereqadmin/recyclereqadmin.component';
import { AdminsdreqaggreComponent } from './adminsdreqaggre/adminsdreqaggre.component';
import { AdminaggrereqrecComponent } from './adminaggrereqrec/adminaggrereqrec.component';
import { AdminrecComponent } from './adminrec/adminrec.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { SignupadminComponent } from './signupadmin/signupadmin.component';
import { AllotedtoaggreComponent } from './allotedtoaggre/allotedtoaggre.component';
import { MyaccountUserComponent } from './myaccount-user/myaccount-user.component';
import { MyaccountSdComponent } from './myaccount-sd/myaccount-sd.component';
import { MyaccountAggreComponent } from './myaccount-aggre/myaccount-aggre.component';
import { MyaccountRecComponent } from './myaccount-rec/myaccount-rec.component';
import { ViewsdComponent } from './viewsd/viewsd.component';
import { ViewaggreComponent } from './viewaggre/viewaggre.component';
import { ViewrecComponent } from './viewrec/viewrec.component';
import { AddslotComponent } from './addslot/addslot.component';
import { CreatesubsComponent } from './createsubs/createsubs.component';
const routes  : Routes =[
  {path: '' , redirectTo:'landing' ,pathMatch:'full'},
  {path : 'landing' ,component:LandingComponent},
  {path: 'design' ,component:DesignComponent},
  {path : 'signup' ,component:SignupComponent},
  {path: 'pickup' , component:PickupComponent},
  {path: 'collections' ,component:CollectionsComponent},
  {path: 'subcollections/:id' ,component:SubCollectionComponent},
  {path: 'cart' , component:CartComponent},
  {path: 'scrape' , component: SdComponent},
  {path: 'recycler', component:RecyclerComponent},
  {path: 'aggregator', component:AggregatorComponent},
  {path: 'associate' , component:AssociateComponent},
  {path: 'pricelist' ,component:PricelistComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'more' , component:MoreComponent},
  {path: 'forgot',component:ForgotComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'scrapereqadmin',component:ScraperequestadminComponent },
  {path: 'allotedaggre',component:AssignedaggreComponent},
  {path: 'aggrereqadmin',component:AggrereqadminComponent},
  {path:'recyclereqadmin',component:RecyclereqadminComponent},
  {path:'adminsdreqaggre',component:AdminsdreqaggreComponent},
  {path:'adminaggrereqrec',component:AdminaggrereqrecComponent},
  {path:'adminrec',component:AdminrecComponent},
  {path:'addlocation',component:AddlocationComponent},
  {path:'signupadmin',component:SignupadminComponent},
  {path:'allotedtoaggre',component:AllotedtoaggreComponent},
  {path:'myaccount-aggre',component:MyaccountAggreComponent},
  {path:'myaccount-sd',component:MyaccountSdComponent},
  {path:'myaccount-rec',component:MyaccountRecComponent},
  {path:'myaccount-user',component:MyaccountUserComponent},
  {path:'viewsd',component:ViewsdComponent},
  {path:'viewaggre',component:ViewaggreComponent},
  {path:'viewrec',component:ViewrecComponent},
  {path:'addslot',component:AddslotComponent},
  {path:'createsubs',component:CreatesubsComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    DesignComponent,
    UserhomeComponent,
    LandingComponent,
    HomeComponent,
    PickupComponent,
    SdComponent,
    CollectionsComponent,
    SubCollectionComponent,
    SignupComponent,
    ForgotComponent,
    AssociateComponent,
    CartComponent,
    RecyclerComponent,
    AggregatorComponent,
    PricelistComponent,
    CheckoutComponent,
    MoreComponent,
    AdminComponent,
    ScraperequestadminComponent,
    AssignedaggreComponent,
    AggrereqadminComponent,
    RecyclereqadminComponent,
    AdminsdreqaggreComponent,
    AdminaggrereqrecComponent,
    AdminrecComponent,
    AddlocationComponent,
    SignupadminComponent,
    AllotedtoaggreComponent,
    MyaccountUserComponent,
    MyaccountSdComponent,
    MyaccountAggreComponent,
    MyaccountRecComponent,
    ViewsdComponent,
    ViewaggreComponent,
    ViewrecComponent,
    AddslotComponent,
    CreatesubsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    NgbModule,
    SidebarModule.forRoot()
    

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
