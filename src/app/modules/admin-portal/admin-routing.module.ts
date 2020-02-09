import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {ProcessingComplaintsComponent} from './components/processing-complaints/processing-complaints.component';
import {ResolvedComplaintsComponent} from './components/resolved-complaints/resolved-complaints.component';
import {ComplaintDetailComponent} from '../client-portal/components/complaint-detail/complaint-detail.component';
import {AllComplaintsComponent} from './components/all-complaints/all-complaints.component';
import { EnoticeComponent} from './components/enotice/enotice.component';

const routes: Routes = [

    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
    },
    
    {
        path: 'processing-complaints',
        component: ProcessingComplaintsComponent
    },
    {
        path: 'resolved-complaints',
        component: ResolvedComplaintsComponent
    },
    {
        path: 'complaint-detail',
        component: ComplaintDetailComponent
    },
    {
        path: 'load_complaints',
        component: AllComplaintsComponent
    },
    {
        path: 'enotice',
        component: EnoticeComponent
    },
    // {
    //     path: 'register',
    //     component: RegisterComponent,
    // },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminPortalRoutingModule{}