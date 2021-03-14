import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatCardMdImage } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { OnboardingComponent } from './onboarding.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingService } from './providers/onboarding.service';
import { FooterModule, HeaderModule } from 'src/app/_shared/modules';

@NgModule({
    declarations: [OnboardingComponent],
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
        OnboardingRoutingModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatMenuModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatFormFieldModule,
        ReactiveFormsModule,
    ],
    providers: [OnboardingService],
})
export class OnboardingModule {}
