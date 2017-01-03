import { Component, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent {
  constructor() {
  }


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
