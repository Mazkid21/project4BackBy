import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NavService } from './nav.service';

import { UsersPageComponent } from '../users-page/users-page.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { TopNavComponent } from '../top-nav/top-nav.component';

import { ReadmePageComponent } from '../readme-page/readme-page.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    UsersPageComponent,
    UserLoginComponent,
    UserProfileComponent,
    TopNavComponent,
    UserFormComponent,
    ReadmePageComponent
  ],
  exports: [
    TopNavComponent,
    UserProfileComponent,
    UsersPageComponent
  ]
})
export class UiModule { }
