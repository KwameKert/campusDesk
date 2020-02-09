import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { PreloaderComponent} from '../components/preloader/preloader.component';

import {
    RegisterComponent,
    LoginComponent
} from './index';


@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        PreloaderComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule
    ]
})

export class AuthenticationModule{}