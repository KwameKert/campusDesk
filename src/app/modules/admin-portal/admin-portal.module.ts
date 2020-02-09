import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { AdminPortalRoutingModule } from './admin-routing.module';

import { Select2Module } from 'ng2-select2';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {DataTableModule} from "angular2-datatable";
import { ProcessingComplaintsComponent } from './components/processing-complaints/processing-complaints.component';
import { ResolvedComplaintsComponent } from './components/resolved-complaints/resolved-complaints.component';
import { AllComplaintsComponent } from './components/all-complaints/all-complaints.component';
import { EnoticeComponent } from './components/enotice/enotice.component';

@NgModule({
  declarations: [AdminDashboardComponent, ProcessingComplaintsComponent, ResolvedComplaintsComponent, AllComplaintsComponent, EnoticeComponent],
  imports: [
    CommonModule,
    Select2Module,
    ReactiveFormsModule,
    FormsModule,
    DataTableModule,
    AdminPortalRoutingModule
  ]
})
export class AdminPortalModule { }
