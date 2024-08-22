import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
