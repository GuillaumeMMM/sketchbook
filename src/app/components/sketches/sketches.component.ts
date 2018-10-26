import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as anime from 'animejs';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.scss']
})
export class SketchesComponent implements OnInit, AfterViewInit {

  constructor() { }

  sketches: Object[] = [];

  ngOnInit() {
    this.sketches.push(
      {
        id: 1,
        title: 'Navigation bars',
        description: 'Navigations bars examples and cheatsheets',
        img: '/assets/navbar3.png',
        colors: ['#08AEEA', '#08AEEA', '#29eaf5'],
        tags: ['Navigation', 'User Interface', 'Javascript'],
        route: '/sketches/navigation',
      }
    );

    this.sketches.push(
      {
        id: 2,
        title: 'Gradient slider',
        description: 'Multiple sliders for minimalist design',
        img: '/assets/jauge3.png',
        colors: ['#08AEEA', '#08AEEA', '#29eaf5'],
        tags: ['Slider', 'User Interface', 'Javascript'],
        route: '/sketches/slider',
      }
    );

    this.sketches.push(
      {
        id: 3,
        title: '3D javascript minigame',
        description: 'Navbars for ...',
        colors: ['#08AEEA', '#08AEEA', '#29eaf5'],
        img: '/assets/cubes.png',
        tags: ['three.js', '3D', 'Javascript', 'Game'],
        route: 'https://guillaumemmm.github.io/3Dgame/',
      }
    );
  }

  ngAfterViewInit() {
    anime.remove('.sketches-title');
    anime.remove('.sketch-element');

    // anime({
    //   targets: '.sketch-element',
    //   delay: 1500,
    //   duration: 1000,
    //   translateY: 30,
    // });

    anime({
      targets: '.sketches-title',
      delay: 1500,
      duration: 1000,
      color: '#ffffff',
      easing: 'linear'
    });

    anime({
      targets: '.sketches-title',
      delay: 800,
      duration: 1000,
      translateX: -50,
      // translateY: 10,
      easing: 'easeOutExpo'
    });

    this.sketches.forEach((sketch, index) => {
      anime({
        targets: '#sketch-element-' + (index + 1),
        delay: 1000 + (200 * index),
        duration: 1500,
        opacity: 1,
        marginTop: 0,
        easing: 'easeOutExpo'
      });
    });
  }
}
