import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { applicationUrls } from 'src/app/_helpers/urls';
import { TeacherOnboarding } from 'src/app/app.interfaces';
import { StorageHelper } from 'src/app/_helpers/storage';

@Injectable({
    providedIn: 'root',
})
export class OnboardingService {
    constructor(private http: HttpClient) {}

    submitOboardingData(data: TeacherOnboarding) {
        const url = applicationUrls.teacherOnboardingDataUrl;
        return this.http.post(url, data);
    }

    completeOnboarding() {
        let user_info = StorageHelper.userInfo;
        user_info['onboarding_status'] = 'completed1';
        StorageHelper.userInfo = user_info;
    }
}
