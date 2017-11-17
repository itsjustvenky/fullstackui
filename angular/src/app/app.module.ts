import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing';
import { AlertComponent } from './alert.component';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing';
import { UserPageComponent } from './userpage.component';
import { UserPageRoutingModule } from './userpage-routing';

import { EqualValidatorDirective } from './equal-validator.directive';

import { AlertService } from './alert.service';
import { LoginAuthenticationService } from './loginAuth.service';
import { RegistrationService } from './register.service';
import { UserService } from './user.service';
import { RegisterUser } from './registerUser';
import { UserpageService } from './userpage-service';
import { User } from './User';
import { RegUser } from './RegUser';
import { Policy } from './Policy';
import { UserLogin } from './UserLogin';

// used to create fake backend
//import { fakeBackendProvider } from './fake.background';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    AlertComponent,
    RegisterComponent,
    EqualValidatorDirective,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoginRoutingModule,
    ContactRoutingModule,
    AboutRoutingModule,
    RegisterRoutingModule,
    UserPageRoutingModule
  ],
  providers: [
  AlertService,
  LoginAuthenticationService,
  RegistrationService,
  UserService,
  //MockBackend,
  //BaseRequestOptions,
  RegisterUser,
  User,
  RegUser,
  UserpageService,
  Policy,
  UserLogin
],
  bootstrap: [AppComponent]
})
export class AppModule { }
