import { SERVER_URL } from './constants';
import { StorageHelper } from './storage';
import { HttpHeaders } from '@angular/common/http';

class ApplicationUrls {
    private static appUrlsInstance: ApplicationUrls;
    public serverUrl: string;

    public static getInstance(): ApplicationUrls {
        if (!ApplicationUrls.appUrlsInstance) {
            ApplicationUrls.appUrlsInstance = new ApplicationUrls();
            ApplicationUrls.appUrlsInstance.serverUrl = `${SERVER_URL}api/`;
        }
        return ApplicationUrls.appUrlsInstance;
    }

    public headers() {
        const userInfo = StorageHelper.userInfo;
        const headers = {
            Authorization: `Token ${userInfo.accessToken}`,
        };
        return new HttpHeaders(headers);
    }

    /**
     * Accounts
     */

    get loginUrl() {
        return this.serverUrl + 'accounts/login/';
    }
    get logoutUrl() {
        return this.serverUrl + 'accounts/logout/';
    }

    /**
     * Jobs
     */

    get recommendedJobsUrl() {
        return this.serverUrl + 'jobs/recommended/';
    }

    /**
     * Profile
     */

    get UserProfileData() {
        return this.serverUrl + 'profile/teacher_profile_data/';
    }

    /**
     * Onboarding
     */

    get teacherOnboardingDataUrl() {
        return this.serverUrl + 'teacher_profile/onboarding/';
    }
}

export let applicationUrls = ApplicationUrls.getInstance();
