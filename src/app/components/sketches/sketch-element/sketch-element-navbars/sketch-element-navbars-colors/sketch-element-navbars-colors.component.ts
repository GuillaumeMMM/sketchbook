import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as anime from 'animejs';

@Component({
  selector: 'app-sketch-element-navbars-colors',
  templateUrl: './sketch-element-navbars-colors.component.html',
  styleUrls: ['./sketch-element-navbars-colors.component.scss']
})
export class SketchElementNavbarsColorsComponent implements OnInit, AfterViewInit {

  constructor() { }

  circles1 = [
    {
      initialPosition: 0,
    },
  ];
  circles2 = [
    {
      initialPosition: 95,
    },
  ];
  circles3 = [
    {
      initialPosition: 191,
    },
  ];
  circles4 = [
    {
      initialPosition: 249,
    },
  ];

  transparency = 0;
  red = 95;
  blue = 191;
  green = 249;

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementsByClassName('navbar')[0]['style'].backgroundColor = 'rgba(' + this.red + ', ' + this.blue + ', ' + this.green + ', ' + ((100 - this.transparency) / 100) + ')';
  }

  animateNavbar1(action) {
    anime.remove('.container-1 .navbar');

    // switch (action) {
    //   case 'in':
    //     anime({
    //       targets: '.container-1 .navbar',
    //       backgroundColor: '#41d6c3',
    //     });
    //     break;
    //   case 'out':
    //     anime({
    //       targets: '.container-1 .navbar',
    //       backgroundColor: '#08AEEA',
    //     });
    //     break;
    // }
  }

  animateText(target, action) {
    const element = document.getElementsByClassName(target)[0];
    if (element) {
      switch (action) {
        case 'in':
          element.setAttribute('style', 'border-bottom: 2px white solid');
          break;
        case 'out':
          element.setAttribute('style', 'border-bottom: 0px white solid');
          break;
      }
    }
  }

  onPositionChange(circles) {
    if (circles && circles[0]) {
      this.transparency = circles[0]['position'];
      document.getElementsByClassName('navbar')[0]['style'].backgroundColor = 'rgba(' + this.red + ', ' + this.blue + ', ' + this.green + ',' + ((100 - this.transparency) / 100) + ')';
    }
  }

  onPositionChangeRed(circles) {
    if (circles && circles[0]) {
      this.red = circles[0]['position'];
      document.getElementsByClassName('navbar')[0]['style'].backgroundColor = 'rgba(' + this.red + ', ' + this.blue + ', ' + this.green + ',' + ((100 - this.transparency) / 100) + ')';
    }
  }

  onPositionChangeBlue(circles) {
    if (circles && circles[0]) {
      this.blue = circles[0]['position'];
      document.getElementsByClassName('navbar')[0]['style'].backgroundColor = 'rgba(' + this.red + ', ' + this.blue + ', ' + this.green + ',' + ((100 - this.transparency) / 100) + ')';
    }
  }

  onPositionChangeGreen(circles) {
    if (circles && circles[0]) {
      this.green = circles[0]['position'];
      document.getElementsByClassName('navbar')[0]['style'].backgroundColor = 'rgba(' + this.red + ', ' + this.blue + ', ' + this.green + ',' + ((100 - this.transparency) / 100) + ')';
    }
  }
}
