import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherEditProfileComponent } from './teacher-edit-profile/teacher-edit-profile.component';
import { TeacherViewProfileComponent } from './teacher-view-profile/teacher-view-profile.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            { path: 'teacher-view', component: TeacherViewProfileComponent },
            { path: 'teacher-edit', component: TeacherEditProfileComponent },
            { path: '', redirectTo: 'teacher-view', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfileRoutingModule {}
