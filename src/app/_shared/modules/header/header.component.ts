import { Component, OnInit } from '@angular/core';
import { SELECTED_VENDOR } from 'src/app/_helpers/constants';
import { AuthService } from 'src/app/modules/auth/providers/auth.service';
import { StorageHelper } from 'src/app/_helpers/storage';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(private authService: AuthService, private route: Router) {}

    logoPath = SELECTED_VENDOR.logoUrl;

    ngOnInit(): void {}

    logout() {
        this.authService.logout();
    }
}
