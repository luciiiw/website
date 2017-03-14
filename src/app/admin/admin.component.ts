import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { delay } from 'lodash';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  studentApplications: FirebaseListObservable<any>;
  nonProfitApplications: FirebaseListObservable<any>;

  statuses = ['pending', 'rejected', 'interviewed', 'joined'];

  constructor(public af: AngularFire, public router: Router) {
    this.studentApplications = af.database.list('studentApplications/');
    this.nonProfitApplications = af.database.list('nonProfitApplications/');
  }

  onStudentStatusSelect(event, key) {
    this.updateStudentApplicationStatus(key, event.target.value);
  }

  updateStudentApplicationStatus(key, status) {
    this.updateStudentApplication(key, { status: status });
  }

  updateStudentApplication(key, update) {
    this.studentApplications.update(key, update);
  }

  deleteStudentApplication(key, name) {
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
    if (!confirm) {
      return;
    }
    this.studentApplications.remove(key);
  }

  onNonProfitStatusSelect(event, key) {
    this.updateNonProfitApplicationStatus(key, event.target.value);
  }

  updateNonProfitApplicationStatus(key, status) {
    this.updateNonProfitApplication(key, { status: status });
  }

  updateNonProfitApplication(key, update) {
    this.nonProfitApplications.update(key, update);
  }

  deleteNonProfitApplication(key, name) {
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
    if (!confirm) {
      return;
    }
    this.nonProfitApplications.remove(key);
  }

  logout(): void {
    this.af.auth.logout();
    delay(() => this.router.navigate(['/login']), 100);
  }

  ngOnInit() {
  }

}
