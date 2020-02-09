import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Select2Module } from 'ng2-select2';

import { NgModule } from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './main/app.component';
import { PortalHeaderComponent ,
   PortalSidebarComponent, 
   PortalFooterComponent} from './layout';
import { PortalComponent } from './layout/portal/portal.component';

import {AppRoutingModule} from './app-routing-module';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';

import { DatePipe } from '@angular/common';
import {DataTableModule} from "angular2-datatable";
import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminSidebarComponent } from './layout/components/admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalHeaderComponent,
    PortalSidebarComponent,
    PortalFooterComponent,
    PortalComponent,
    LandingPageComponent,
    AdminLayoutComponent,
    AdminSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Select2Module,
    DataTableModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  
  providers: [ DatePipe, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
