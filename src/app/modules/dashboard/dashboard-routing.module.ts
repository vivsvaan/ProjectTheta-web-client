import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule) },
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
