import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule,Routes} from '@angular/router';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule }from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';


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
import { AssignComponent } from './sd/assign/assign.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MoreComponent } from './more/more.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MyaccountComponent } from './myaccount/myaccount.component';



const routes  : Routes =[
  {path: '' , redirectTo:'landing' ,pathMatch:'full'},
  {path : 'landing' ,component:LandingComponent},
  {path: 'design' ,component:DesignComponent},
  {path : 'signup' ,component:SignupComponent},
  {path: 'pickup' , component:PickupComponent},
  {path: 'collections' ,component:CollectionsComponent},
  {path: 'subcollections' ,component:SubCollectionComponent},
  {path: 'cart' , component:CartComponent},
  {path: 'scrape' , component: SdComponent},
  {path: 'recycler', component:RecyclerComponent},
  {path: 'aggregator', component:AggregatorComponent},
  {path: 'associate' , component:AssociateComponent},
  {path: 'assign' ,component:AssignComponent},
  {path: 'pricelist' ,component:PricelistComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'more' , component:MoreComponent},
  {path: 'forgot',component:ForgotComponent},
  {path: 'myaccount' , component:MyaccountComponent}
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
    AssignComponent,
    PricelistComponent,
    CheckoutComponent,
    MoreComponent,
    MyaccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
    

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
