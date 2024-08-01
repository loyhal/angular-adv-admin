import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [    
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
