import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../auth.guard';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ComplaintDetailComponent} from '../client-portal/components/complaint-detail/complaint-detail.component';

import { EnoticeAllComponent } from './components/enotice-all/enotice-all.component';
//import {DashboardComponent} from './components/dashboard/dashboard.component';
//import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [

    {
        path: 'client-dashboard',
        component: DashboardComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'client-complaint-detail',
        component: ComplaintDetailComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'load-enotice',
        component: EnoticeAllComponent,
        canActivate:[AuthGuard]
    },
    
 

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientPortalRoutingModule{}