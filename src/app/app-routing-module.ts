import {NgModule} from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';


import {PortalComponent} from './layout/portal/portal.component';
import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';


const routes: Routes = [

    { path: '', redirectTo: 'client-dashboard', pathMatch: 'full' },
    {
        path: '',
        component: LandingPageComponent,
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
            path: '', 
            component: PortalComponent,
            loadChildren: () => import('./modules/client-portal/client-portal.module').then(m=>m.ClientPortalModule)
    },
    {
        path: '', 
        component: AdminLayoutComponent,
        loadChildren: () => import('./modules/admin-portal/admin-portal.module').then(m=>m.AdminPortalModule)
},
    {
        path: '**',
        redirectTo: 'login'
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }

