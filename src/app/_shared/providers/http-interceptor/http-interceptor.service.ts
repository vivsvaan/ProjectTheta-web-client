import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { StorageHelper } from 'src/app/_helpers/storage';
import { APP_SECRET } from 'src/app/_helpers/constants';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private toastr: ToastrService, private route: Router) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const isRefreshTokenRequest =
            request.url.indexOf('accounts/refresh/') !== -1;
        const shouldHaveToken: boolean =
            StorageHelper.userInfo &&
            StorageHelper.userInfo.accessToken &&
            StorageHelper.userInfo.accessToken.length > 0 &&
            !isRefreshTokenRequest;

        return from(
            shouldHaveToken
                ? Promise.resolve(StorageHelper.userInfo.accessToken)
                : Promise.resolve()
        ).pipe(
            switchMap((token: string) => {
                let newHeaders = {};
                newHeaders = { 'App-Secret': APP_SECRET };
                if (shouldHaveToken && !request.headers.get('Authorization')) {
                    newHeaders['Authorization'] = `Token ${token}`;
                }

                request = request.clone({
                    setHeaders: newHeaders,
                });

                const errorHandler = catchError((error, _) => {
                    let errorMsg = null;

                    if (error.status === 0) {
                        errorMsg =
                            'Connectivity Error! Please try again after ensuring Internet Connectivity.';
                    } else if (error.status === 401) {
                        if (error.error) {
                            errorMsg =
                                error.error.msg ||
                                error.error.error ||
                                error.error;
                        } else {
                            errorMsg = 'Invalid Authorization';
                        }
                    } else if (error.status === 500) {
                        errorMsg = "Server Error! Something's wrong.";
                    } else {
                        const err = error.error;
                        if (
                            err &&
                            ((err.hasOwnProperty('msg') &&
                                typeof err.msg == 'string') ||
                                (err.hasQwnProperty('error') &&
                                    typeof err.error == 'string'))
                        ) {
                            errorMsg = err.msg || err.error;
                        }
                    }

                    if (errorMsg) {
                        this.toastr.toastrConfig.preventDuplicates = true;
                        this.toastr.error(errorMsg, '');
                        this.toastr.toastrConfig.preventDuplicates = false;
                    }

                    return throwError(error);
                }) as any;

                const successHandler = map<any, any>((res) => {
                    return res;
                });
                return next
                    .handle(request)
                    .pipe(successHandler, errorHandler) as Observable<
                    HttpEvent<any>
                >;
            })
        );
    }

    // logout() {
    //     StorageHelper.userInfo = null;
    //     this.route.navigate(['auth']);
    // }
}
