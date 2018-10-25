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
        title: '3D javascript minigame',
        description: 'Navbars for ...',
        colors: ['#08AEEA', '#08AEEA', '#2AF598'],
        img: '/assets/threegame.png',
        tags: ['three.js', '3D', 'Javascript', 'Game'],
        route: '/3Dgame',
      }
    );


    this.sketches.push(
      {
        id: 2,
        title: 'Navigation bars',
        description: 'Navigations bars examples and cheatsheets',
        img: '/assets/navigation.jpg',
        colors: ['#FFE53B', '#FFE53B', '#FF2525'],
        tags: ['Navigation', 'User Interface', 'Javascript'],
        route: '/sketches/navigation',
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
      delay: 1500,
      duration: 1000,
      translateX: -50,
      // translateY: 10,
      easing: 'easeOutExpo'
    });
  }
}
