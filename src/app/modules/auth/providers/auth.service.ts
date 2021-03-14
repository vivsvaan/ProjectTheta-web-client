import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    LoginRequestParams,
    RegisterRequestParams,
    LoginResponse,
    UserInfo,
} from 'src/app/app.interfaces';
import { Observable } from 'rxjs';
import { applicationUrls } from 'src/app/_helpers/urls';
import { StorageHelper } from 'src/app/_helpers/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private route: Router,
        private toastr: ToastrService
    ) {}

    login(
        params: LoginRequestParams | RegisterRequestParams
    ): Observable<LoginResponse> {
        const url = applicationUrls.loginUrl;
        return this.http.post<LoginResponse>(url, params);
    }

    // TODO - need to optimize
    logout() {
        const url = applicationUrls.logoutUrl;
        this.http.get(url).subscribe(
            (res) => {
                this.toastr.error('Logged Out', '');
                StorageHelper.userInfo = null;
                this.route.navigate(['/auth']);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    setUserInfo(userInfo: UserInfo) {
        StorageHelper.userInfo = userInfo;
    }
}
