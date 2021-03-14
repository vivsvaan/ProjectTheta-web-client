export class Vendor {
    name: string;
    logoUrl: string;
    iconsPath: string;
    legalLinks?: any[];
    socialLinks?: any;

    constructor(config: Vendor) {
        Object.assign(this, config);
    }
}


export const Theta = new Vendor({
    name: 'Theta',
    logoUrl: '../../../assets/images/theta/logo.png',
    iconsPath: '../../../assets/icons/theta',
    legalLinks: [
        {
            name: 'Name',
            url: '#'
        }
    ],
    socialLinks: {
        facebook: '#',
        twitter: '#',
    }

});