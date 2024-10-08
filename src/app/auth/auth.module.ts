import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent],
    exports: [
      LoginComponent,
      RegisterComponent,
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
