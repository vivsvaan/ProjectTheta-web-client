import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from './providers/onboarding.service';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
    questions: any;
    activeQuestionIndex = 0;
    constructor(
        private onboardingService: OnboardingService,
        private route: Router
    ) {}

    ngOnInit() {
        this.questions = [
            {
                question: 'What do you want to do in your life?',
                options: [
                    { name: 'Nothing', selected: false },
                    { name: 'Nada', selected: false },
                    { name: 'LOL Pls', selected: false },
                    { name: 'Sad question xD', selected: false },
                ],
                disclaimer: ' this question is very hard',
            },
        ];
    }

    selectionHandler(event) {
        event.selected = !event.selected;
    }

    handleNextStep() {
        if ((this.activeQuestionIndex = this.questions.length - 1)) {
            /* Form will be submitted */
        } else {
            this.activeQuestionIndex = this.activeQuestionIndex + 1;
        }
    }

    setOnboardingData() {
        const sampleData = {
            job_role: 'teacher',
            preferred_subjects: 'english, maths',
            total_experience: 10,
            highest_education: 'graduation',
            preferred_city: 'chandigarh',
            start_date: '2020-10-24',
        };
        
        this.onboardingService.submitOboardingData(sampleData).subscribe(
            (data) => {
                console.log('onboarding response data is: ', data);
                this.onboardingService.completeOnboarding();
                this.route.navigate(['/dashboard']);
            },
            (error) => {
                console.log('onboarding response error is: ', error);
            }
        );
    }
}
