import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-non-profit-details',
  templateUrl: './non-profit-details.component.html',
  styleUrls: ['./non-profit-details.component.css']
})

export class NonProfitDetailsComponent implements OnInit {
  application: FirebaseListObservable<any>;
  subscription: Subscription;

  constructor(af: AngularFire, ar: ActivatedRoute) {
    this.subscription = ar.params.subscribe((param: any) => {
      let key = param['key'];
      this.application = af.database.list('nonProfitApplications/', {
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
