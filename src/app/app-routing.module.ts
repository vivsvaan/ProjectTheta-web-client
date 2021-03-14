import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_shared/guards/auth/auth.guard';
import { DashboardGuard } from './_shared/guards/dashboard/dashboard.guard';
import { OnboardingGuard } from './_shared/guards/onboarding/onboarding.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/auth/auth.module').then((m) => m.AuthModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./modules/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
        canActivate: [DashboardGuard],
        canLoad: [DashboardGuard],
    },
    {
        path: 'onboarding',
        loadChildren: () =>
            import('./modules/onboarding/onboarding.module').then(
                (m) => m.OnboardingModule
            ),
        canActivate: [OnboardingGuard],
        canLoad: [OnboardingGuard],
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
