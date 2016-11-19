import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { CONFIG } from '../configs/config';
import { EmailValidator } from './directives/validate-email.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { MainComponent } from './main/main.component';
import { StudentApplicationComponent } from './student-application/student-application.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StudentApplicationComponent,
    EmailValidator,
    AdminComponent,
    StudentDetailsComponent,
    FilterPipe,
  ],
  imports: [
    AngularFireModule.initializeApp(CONFIG.firebaseConfig),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'student-application', component: StudentApplicationComponent },
      { path: 'admin/student-details/:key', component: StudentDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
