import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

const LANDING_VIEW_URL = '/';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})

export class HeaderNavComponent implements AfterViewInit {
  links: Object[];
  isLandingView: boolean;

  constructor(router: Router) {
    router.events
      .subscribe((e: NavigationStart) => {
        this.isLandingView = LANDING_VIEW_URL === e.url;
      });

    this.links = [
      {
        name: 'Projects',
        link: '/projects'
      },
      {
        name: 'Nonprofits',
        link: '/nonprofits'
      },
      {
        name: 'Students',
        link: '/students'
      },
      {
        name: 'Team',
        link: '/team'
      },
      {
        name: 'Blog',
        link: 'https://medium.com/@uwblueprint',
        target: '_blank'
      }
    ];
  }

  ngAfterViewInit() {
    document.getElementById('hamburgler').addEventListener('click', checkNav);
    $('.hamburgler-menu-list a').on('click', () => closeNav());
    window.addEventListener('keyup', function (e) {
      if (e.keyCode == 27) closeNav();
    }, false);

    function checkNav() {
      if (document.body.classList.contains('hamburgler-active')) {
        closeNav();
      } else {
        openNav();
      }
    }

    function closeNav() {
      document.body.classList.remove('hamburgler-active');
    }

    function openNav() {
      document.body.classList.add('hamburgler-active');
    }
  }
}
