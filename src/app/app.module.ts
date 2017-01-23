import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { ApplicationSuccessComponent } from './application-success/application-success.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CONFIG } from '../configs/config';
import { EmailValidatorDirective } from './directives/validate-email.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NoAuthGuardService } from './services/no-auth-guard.service';
import { NonProfitApplicationComponent } from './non-profit-application/non-profit-application.component';
import { NonProfitDetailsComponent } from './non-profit-details/non-profit-details.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { StudentApplicationComponent } from './student-application/student-application.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TeamPageComponent } from './team-page/team-page.component';


@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    ApplicationSuccessComponent,
    EmailValidatorDirective,
    FilterPipe,
    LoginComponent,
    MainComponent,
    NonProfitApplicationComponent,
    NonProfitDetailsComponent,
    StudentApplicationComponent,
    StudentDetailsComponent,
    TeamPageComponent,
    ProjectsPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(CONFIG.firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      {
        path: 'admin', 
        component: AdminComponent,
        canActivate: [AuthGuardService]
      },
      { path: 'admin/student-details/:key', component: StudentDetailsComponent },
      { path: 'admin/non-profit-details/:key', component: NonProfitDetailsComponent },
      { 
        path: 'login', 
        component: LoginComponent,
        canActivate: [NoAuthGuardService]
      },
      { path: 'non-profits/application', component: NonProfitApplicationComponent },
      { path: 'non-profits/application/success', component: ApplicationSuccessComponent },
      { path: 'projects', component: ProjectsPageComponent },
      { path: 'students/application', component: StudentApplicationComponent },
      { path: 'students/application/success', component: ApplicationSuccessComponent },
      { path: 'team', component: TeamPageComponent },
    ])
  ],
  providers: [
    AuthGuardService,
    NoAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
