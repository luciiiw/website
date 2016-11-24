import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  studentApplications: FirebaseListObservable<any>;
  nonProfitApplications: FirebaseListObservable<any>;

  statuses = ['pending', 'rejected', 'interviewed', 'joined'];

  constructor(af: AngularFire) {
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

  deleteStudentApplication(key) {
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

  deleteNonProfitApplication(key) {
    this.nonProfitApplications.remove(key);
  }

  ngOnInit() {
  }

}
