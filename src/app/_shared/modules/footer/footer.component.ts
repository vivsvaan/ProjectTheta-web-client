import { Component, OnInit } from '@angular/core';
import { SELECTED_VENDOR } from 'src/app/_helpers/constants';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    constructor() {}

    socialLinks = SELECTED_VENDOR.socialLinks;

    legalLinks = SELECTED_VENDOR.legalLinks;

    ngOnInit(): void {}
}
