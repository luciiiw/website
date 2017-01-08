import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    function triangle() {
      $('#section-triangle').css("border-left",  $(window).width() + "px solid transparent");
      $('#section-triangle2').css("border-left", $(window).width() + "px solid white");
      $('#section-triangle3').css("border-left", $(window).width() + "px solid transparent");
    }
    triangle();

    $(window).on('resize', triangle);
  }

}
