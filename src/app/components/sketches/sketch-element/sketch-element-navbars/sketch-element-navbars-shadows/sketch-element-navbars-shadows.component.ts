import { Component, OnInit } from '@angular/core';

import * as anime from 'animejs';

@Component({
  selector: 'app-sketch-element-navbars-shadows',
  templateUrl: './sketch-element-navbars-shadows.component.html',
  styleUrls: ['./sketch-element-navbars-shadows.component.scss']
})
export class SketchElementNavbarsShadowsComponent implements OnInit {

  constructor() { }

  initialWidth = 0;
  initialHeight = 0;

  ngOnInit() {
  }

  animateNavbar1(action) {
    anime.remove('.container-1 .navbar-back');

    switch (action) {
      case 'in':
      anime({
        targets: '.container-1 .navbar-back',
        translateX: '-3vh',
        translateY: '-3vh',
      });
      break;
      case 'out':
      anime({
        targets: '.container-1 .navbar-back',
        translateX: 0,
        translateY: 0
      });
      break;
    }
  }

  animateNavbar2(action) {
    anime.remove('.container-2 .navbar-back');
    let width = 0;
    let height = 0;

    if (this.initialWidth === 0)  {
      width = document.querySelector('.container-2 .navbar-back')['offsetWidth'];
      this.initialWidth = width;
    } else {
      width = this.initialWidth;
    }
    const newWidth = width + 0.04 * document.documentElement.clientHeight;

    if (this.initialHeight === 0)  {
      height = document.querySelector('.container-2 .navbar-back')['offsetHeight'];
      this.initialHeight = height;
    } else {
      height = this.initialHeight;
    }
    const newHeight = height + 0.04 * document.documentElement.clientHeight;

    switch (action) {
      case 'in':
      anime({
        targets: '.container-2 .navbar-back',
        translateX: '-3vh',
        translateY: '-3vh',
        width: newWidth,
        height: newHeight,
      });
      break;
      case 'out':
      anime({
        targets: '.container-2 .navbar-back',
        translateX: 0,
        translateY: 0,
        width: this.initialWidth,
        height: this.initialHeight
      });
      break;
    }
  }

  animateNavbar3(action) {
    anime.remove('.container-3 .navbar-back');
    anime.remove('.container-3 .navbar');
    let width = 0;
    let height = 0;

    if (this.initialWidth === 0)  {
      width = document.querySelector('.container-3 .navbar-back')['offsetWidth'];
      this.initialWidth = width;
    } else {
      width = this.initialWidth;
    }
    const newWidth = width + 0.04 * document.documentElement.clientHeight;

    if (this.initialHeight === 0)  {
      height = document.querySelector('.container-3 .navbar-back')['offsetHeight'];
      this.initialHeight = height;
    } else {
      height = this.initialHeight;
    }
    const newHeight = height + 0.04 * document.documentElement.clientHeight;

    switch (action) {
      case 'in':
      anime({
        targets: '.container-3 .navbar-back',
        translateX: '-4vh',
        translateY: '-4vh',
        width: newWidth,
        height: newHeight,
        backgroundColor: 'rgba(95, 191, 249, 1)',
        borderWidth: '2px',
      });

      anime({
        targets: '.container-3 .navbar',
        borderWidth: '0px',
        duration: 200,
      });
      break;
      case 'out':
      anime({
        targets: '.container-3 .navbar-back',
        translateX: 0,
        translateY: 0,
        width: this.initialWidth,
        height: this.initialHeight,
        backgroundColor: 'rgba(95, 191, 249, 0.8)',
        borderWidth: '0px',
      });

      anime({
        targets: '.container-3 .navbar',
        borderWidth: '2px',
        duration: 200,
      });
      break;
    }
  }

  animateNavbar4(action) {
    anime.remove('.container-4 .navbar-back');

    switch (action) {
      case 'in':
      anime({
        targets: '.container-4 .navbar-back',
        translateX: '-3vh',
        translateY: '-3vh',
        borderWidth: '2px',
      });
      break;
      case 'out':
      anime({
        targets: '.container-4 .navbar-back',
        translateX: 0,
        translateY: 0,
        borderWidth: {
         value: '0px',
         duration: 300,
         easing: 'linear',
        }
      });
      break;
    }
  }

  animateNavbar5(action) {
    anime.remove('.container-5 .navbar-back');

    switch (action) {
      case 'in':
      anime({
        targets: '.container-5 .navbar-back',
        translateX: '-3vh',
        translateY: '-3vh',
        borderWidth: {
          value: '0px',
          duration: 300,
          easing: 'linear',
         }
      });
      break;
      case 'out':
      anime({
        targets: '.container-5 .navbar-back',
        translateX: 0,
        translateY: 0,
        borderWidth: {
         value: '2px',
         duration: 300,
         easing: 'linear',
        }
      });
      break;
    }
  }

  animateNavbar6(action) {
    anime.remove('.container-6 .navbar-back');
    anime.remove('.container-6 .navbar-back-2');

    switch (action) {
      case 'in':
      anime({
        targets: '.container-6 .navbar-back',
        // translateX: '-1.5vh',
        translateY: '-1.5vh',
        easing: 'easeOutQuad',
        duration: 300,
        borderWidth: {
          value: '0px',
          duration: 300,
          easing: 'linear',
         }
      });

      anime({
        targets: '.container-6 .navbar',
        backgroundColor: 'rgba(95, 191, 249, 1)',
      });

      anime({
        targets: '.container-6 .navbar-back-2',
        // translateX: '-3vh',
        translateY: '-3vh',
        easing: 'easeOutQuad',
        duration: 300,
        borderWidth: {
          value: '0px',
          duration: 300,
          easing: 'linear',
         }
      });
      break;
      case 'out':

      anime({
        targets: '.container-6 .navbar-back',
        translateX: 0,
        translateY: 0,
        borderWidth: {
         value: '2px',
         duration: 300,
         easing: 'linear',
        }
      });

      anime({
        targets: '.container-6 .navbar-back-2',
        translateX: 0,
        translateY: 0,
        borderWidth: {
         value: '2px',
         duration: 300,
         easing: 'linear',
        }
      });
      break;
    }
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
}
