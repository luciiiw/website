import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const LANDING_VIEW_URL = '/';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})

export class HeaderNavComponent implements OnInit {
  isLandingView: boolean;

  constructor(router: Router) {
    router.events.subscribe(event => {
      this.isLandingView = LANDING_VIEW_URL === event.url;
    });
  }

  ngOnInit() {
  }

}
