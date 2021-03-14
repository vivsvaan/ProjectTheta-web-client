import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageHelper } from 'src/app/_helpers/storage';
import { Utils } from 'src/app/_helpers/utilities';

@Injectable({
    providedIn: 'root',
})
export class OnboardingGuard implements CanActivate, CanLoad {
    constructor(private route: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.routeToDestination();
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.routeToDestination();
    }

    private routeToDestination() {
        if (!Utils.isAuthenticated()) {
            this.route.navigate(['/auth']);
            return false;
        } else if (StorageHelper.userInfo.onboarding_status === 'completed') {
            this.route.navigate(['/dashboard']);
            return false;
        }
        return true;
    }
}
