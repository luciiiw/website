import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  application: FirebaseListObservable<any>;
  subscription: Subscription;

  constructor(af: AngularFire, ar: ActivatedRoute) {
    this.subscription = ar.params.subscribe((param: any) => {
      let key = param['key'];
      this.application = af.database.list('studentApplications/', {
        query: {
          orderByKey: true,
          equalTo: key
        }
      });
    });
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
