import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-non-profits-page',
  templateUrl: './non-profits-page.component.html',
  styleUrls: ['./non-profits-page.component.scss']
})
export class NonProfitsPageComponent implements AfterViewInit {

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
