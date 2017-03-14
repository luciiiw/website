import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements AfterViewInit {

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
