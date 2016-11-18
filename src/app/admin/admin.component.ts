import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  studentApplications: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.studentApplications = af.database.list('studentApplications/');
  }

  ngOnInit() {
  }

}
