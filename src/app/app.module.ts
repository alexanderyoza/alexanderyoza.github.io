import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { PatientsComponent } from './patients/patients.component';
import { OurOfficeComponent } from './our-office/our-office.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { HpSolutionsComponent } from './hp-solutions/hp-solutions.component';
import { HpSolutionComponent } from './hp-solution/hp-solution.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FooterComponent } from './footer/footer.component';
import { MemberComponent } from './member/member.component';
import { DentistComponent } from './dentist/dentist.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    PatientsComponent,
    OurOfficeComponent,
    ServicesComponent,
    ContactUsComponent,
    HomeComponent,
    HpSolutionsComponent,
    HpSolutionComponent,
    ScheduleComponent,
    FooterComponent,
    MemberComponent,
    DentistComponent,
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
