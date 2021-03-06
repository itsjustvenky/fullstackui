import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register.component';

const registerRoutes: Routes = [
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(registerRoutes) ],
  exports: [ RouterModule ]
})

export class RegisterRoutingModule { }
