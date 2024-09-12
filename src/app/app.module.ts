import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

import { AuthModule } from './auth/auth.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

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
