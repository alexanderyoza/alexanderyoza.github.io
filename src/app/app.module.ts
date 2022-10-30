import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { OurOfficeComponent } from './our-office/our-office.component';
import { ServicesComponent } from './services/services.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { HpSolutionsComponent } from './hp-solutions/hp-solutions.component';
import { HpSolutionComponent } from './hp-solution/hp-solution.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FooterComponent } from './footer/footer.component';
import { MemberComponent } from './member/member.component';
import { DentistComponent } from './dentist/dentist.component';
import { TopComponent } from './top/top.component';
import { PatientPrivacyComponent } from './patient-privacy/patient-privacy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    OurOfficeComponent,
    ServicesComponent,
    FormsComponent,
    HomeComponent,
    HpSolutionsComponent,
    HpSolutionComponent,
    ScheduleComponent,
    FooterComponent,
    MemberComponent,
    DentistComponent,
    TopComponent,
    PatientPrivacyComponent,
    DisclaimerComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
