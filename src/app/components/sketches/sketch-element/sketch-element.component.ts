import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import * as anime from 'animejs';
import { AUTO_STYLE } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-sketch-element',
  templateUrl: './sketch-element.component.html',
  styleUrls: ['./sketch-element.component.scss']
})
export class SketchElementComponent implements OnInit, AfterViewInit {

  constructor() { }

  angle = 0;
  interval: any;

  @Input() sketch: Object;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.editBackground();
    // document.querySelector('body').addEventListener('mouseover', () => {
    //   this.angle = (this.angle + 2) % 360;
    //   document.getElementById('sketch-container-' + this.sketch['id'])['style'].backgroundImage = 'linear-gradient(' + this.angle + 'deg, ' + this.sketch['colors'][1] + ' 0%, ' + this.sketch['colors'][2] + ' 100%)';
    // });
  }

  editBackground() {
    // document.getElementById('sketch-container-' + this.sketch['id'])['style'].backgroundColor = this.sketch['colors'][0];
    // document.getElementById('sketch-container-' + this.sketch['id'])['style'].backgroundImage = 'linear-gradient(0deg, ' + this.sketch['colors'][1] + ' 0%, ' + this.sketch['colors'][2] + ' 100%)';
  }

  onMouseAction(action) {
    const element = document.getElementById('sketch-img-' + this.sketch['id']);
    anime.remove(element);
    switch (action) {
      case 'in':
        anime({
          targets: element,
          opacity: 1,
        });
      break;
      case 'out':
        anime({
          targets: element,
          opacity: 0.8,
        });
      break;
    }
  }

}
