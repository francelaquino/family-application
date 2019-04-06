import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddressComponent } from './pages/address/address.component';
import {PanelModule} from 'primeng/panel';
import { RegisterComponent } from './pages/register/register.component';
import { FamilymembersComponent } from './pages/familymembers/familymembers.component';
import { AddfamilymemberComponent } from './pages/addfamilymember/addfamilymember.component';
import { EditfamilymemberComponent } from './pages/editfamilymember/editfamilymember.component';
import { LoginComponent } from './pages/login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ContactComponent,
    AddressComponent,
    RegisterComponent,
    FamilymembersComponent,
    AddfamilymemberComponent,
    EditfamilymemberComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,PanelModule,BrowserAnimationsModule, 
    FormsModule, ReactiveFormsModule,HttpClientModule,ModalModule.forRoot(),
  ],
  entryComponents: [
    EditfamilymemberComponent,AddfamilymemberComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
