import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffComponent } from './staff/staff.component';
import { OurOfficeComponent } from './our-office/our-office.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PatientPrivacyComponent } from './patient-privacy/patient-privacy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'our-office', component: OurOfficeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'patient-privacy', component: PatientPrivacyComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
