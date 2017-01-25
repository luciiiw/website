import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements AfterViewInit {

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
