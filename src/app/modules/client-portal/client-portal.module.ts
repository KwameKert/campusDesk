import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select2Module } from 'ng2-select2';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientPortalRoutingModule } from './client-portal-routing.module';

import {DataTableModule} from "angular2-datatable";
import { from } from 'rxjs';
import { ComplaintDetailComponent } from './components/complaint-detail/complaint-detail.component';
import { EnoticeAllComponent } from './components/enotice-all/enotice-all.component';


@NgModule({
  declarations: [DashboardComponent, ComplaintDetailComponent, EnoticeAllComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Select2Module,
    DataTableModule,
    ClientPortalRoutingModule
  ]
})
export class ClientPortalModule { }
