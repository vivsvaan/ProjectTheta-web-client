import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
    RegisterRequestParams,
    LoginRequestParams,
    UserInfo,
} from 'src/app/app.interfaces';
import { AuthService } from '../../providers/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    create_user = false;

    constructor(private authService: AuthService, private route: Router) {}

    ngOnInit(): void {
        this.createLoginForm();
    }

    createLoginForm() {
        this.loginForm = new FormGroup({
            name: new FormControl(),
            phone_number: new FormControl(),
            email: new FormControl(),
            password: new FormControl(),
            confirm_password: new FormControl(),
        });
    }

    login(event: Event) {
        event.preventDefault();
        let authDetails;
        if (this.create_user) {
            authDetails = this.loginForm.value as RegisterRequestParams;
            authDetails['is_teacher'] = true;
        } else {
            authDetails = this.loginForm.value as LoginRequestParams;
        }
        authDetails['create_user'] = this.create_user;

        this.authService.login(authDetails).subscribe(
            (res) => {
                const userInfo: UserInfo = {
                    id: res.id,
                    accessToken: res.accessToken,
                    email: res.email,
                    onboarding_status: res.onboarding_status,
                };
                this.authService.setUserInfo(userInfo);
                this.route.navigate(['/dashboard']);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
