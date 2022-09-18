import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { PatientsComponent } from './patients/patients.component';
import { OurOfficeComponent } from './our-office/our-office.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'our-office', component: OurOfficeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
