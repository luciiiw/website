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
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NoAuthGuardService } from './services/no-auth-guard.service';
import { NonProfitApplicationComponent } from './non-profit-application/non-profit-application.component';
import { NonProfitDetailsComponent } from './non-profit-details/non-profit-details.component';
import { NonProfitsPageComponent } from './non-profits-page/non-profits-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { StudentApplicationComponent } from './student-application/student-application.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { TeamPageComponent } from './team-page/team-page.component';

@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    ApplicationSuccessComponent,
    EmailValidatorDirective,
    FilterPipe,
    HeaderNavComponent,
    LoginComponent,
    MainComponent,
    NonProfitApplicationComponent,
    NonProfitDetailsComponent,
    StudentApplicationComponent,
    StudentDetailsComponent,
    TeamPageComponent,
    ProjectsPageComponent,
    NonProfitsPageComponent,
    StudentsPageComponent
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
      // Redirect join to home page for now since application is closed
      // { path: 'join', redirectTo: 'students/application', pathMatch: 'full' },
      { path: 'join', redirectTo: '/', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuardService]
      },
      { path: 'nonprofits', component: NonProfitsPageComponent },
      { path: 'nonprofits/application', component: NonProfitApplicationComponent },
      { path: 'nonprofits/application/success', component: ApplicationSuccessComponent },
      { path: 'projects', component: ProjectsPageComponent },
      { path: 'students', component: StudentsPageComponent },
      // Redirect students/application to home page since it's closed for now
      // { path: 'students/application', component: StudentApplicationComponent },
      { path: 'students/application', redirectTo: '/', pathMatch: 'full'},
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
