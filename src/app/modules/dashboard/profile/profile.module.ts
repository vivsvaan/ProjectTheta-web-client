import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { TeacherEditProfileComponent } from './teacher-edit-profile/teacher-edit-profile.component';
import { ProfileRoutingModule } from './profile-routing.module'


@NgModule({
  declarations: [ProfileComponent, TeacherEditProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
