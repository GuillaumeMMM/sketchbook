import { Component, OnInit, AfterViewInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import * as anime from 'animejs';
import * as uuid from 'uuid';

@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss']
})
export class ColorSliderComponent implements OnInit, AfterViewInit, OnChanges {

  constructor() { }

  @Input() title: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() circles: Object[];

  @Output() handlePositionChange = new EventEmitter<Object>();

  offset = 0;
  clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  circleR = 1.5 * this.clientHeight / 100;

  stepPixel: number;

  ngOnInit() {
    this._setIds(this.circles);
    this.offset = document.getElementsByClassName('slider-elements')[0]['offsetLeft'];
    this.stepPixel = this._rangePositionToPixelPosition(this.step);

    this.circles.forEach((circle, index) => {
      this.circles[index]['position'] = Math.min(Math.max(this.circles[index]['initialPosition'], this.min), this.max);
    });
  }

  ngAfterViewInit() {
    this._addDomElements(this.circles);

    document.addEventListener('mousemove', (event) => {
      this.circles.forEach((circle, index) => {
        if (circle['mouseDown'] && event['clientX'] >= this.offset + 10 && event['clientX'] <= this.clientWidth - this.offset - 10) {
          circle['domInfoElement']['style']['visibility'] = 'visible';
          circle['domElement']['style'].left = (event['clientX'] - this.offset - this.circleR) + 'px';
          circle['position'] = this._pixelPositionTORangePosition(event['clientX'] - this.offset - this.circleR);
          this.handlePositionChange.emit(this.circles);
        }
      });
    });

    document.addEventListener('keydown', (event) => {
      let circleIndex = 0;
      this.circles.forEach((circleTmp, index) => {
        if (circleTmp['focused']) {
          circleIndex = index;
        }
      });
      const circle = this.circles.filter(circleTmp => {
        return circleTmp['focused'];
      });
      let circleElement: Element;
      if (circle.length > 0) {
        circleElement = circle[0]['domElement'];
      const currentLeft = Number(window.getComputedStyle(circleElement).left.split('px')[0]);
      if (circleElement === document.activeElement) {
        circleElement['style']['visibility'] = 'visible';
        switch (event.key) {
          case 'ArrowLeft':
          anime.remove(circleElement);
          anime({
            targets: circleElement,
            left: Math.max(0, (currentLeft - this.stepPixel)) + 'px',
            easing: 'linear',
            duration: 100,
          });
          this.circles[circleIndex]['position'] = this._pixelPositionTORangePosition(Math.max(10, (currentLeft - this.stepPixel)));
          this.handlePositionChange.emit(this.circles);
          break;
          case 'ArrowRight':
          anime.remove(circleElement);
          anime({
            targets: circleElement,
            left: Math.min((currentLeft + this.stepPixel), (document.getElementsByClassName('slider-bar-container')[0]['offsetWidth']) - 10) + 'px',
            easing: 'linear',
            duration: 100,
          });
          this.circles[circleIndex]['position'] = this._pixelPositionTORangePosition(Math.min((currentLeft + this.stepPixel), document.getElementsByClassName('slider-bar-container')[0]['offsetWidth'] - 10));
          this.handlePositionChange.emit(this.circles);
          break;
        }
      }
    }
    });


    document.addEventListener('mouseup', (event) => {
      this.circles.forEach((circle, index) => {
        if (circle['focused']) {
          this.circles[index]['mouseDown'] = false;
          if (!event.target['id'] || event.target['id'] !== circle['id']) {
            this.circles[index]['domInfoElement']['style']['visibility'] = 'hidden';
          }
        }
      });
    });
  }

  onMouseDown(event) {
    event.preventDefault();
    const elementId = event.target['id'];
    let circleIndex = 0;
    this.circles.forEach((circle, index) => {
      if (circle['id'] === elementId || circle['circleInfoId'] === elementId) {
        circleIndex = index;
        this.circles[index]['focused'] = true;
        this.circles[index]['mouseDown'] = true;
      } else {
        this.circles[index]['focused'] = false;
        this.circles[index]['mouseDown'] = false;
        this.circles[index]['domInfoElement']['style']['visibility'] = 'hidden';
      }
    });
    this.circles[circleIndex]['domInfoElement']['style']['visibility'] = 'visible';
    this.circles[circleIndex]['domElement'].focus();
  }

  onMouseUp(event) {
    const elementId = event.target['id'];
    let circleIndex: number;
    this.circles.forEach((circle, index) => {
      if (circle['id'] === elementId) {
        circleIndex = index;
      }
    });
    if (this.circles[circleIndex]) {
      this.circles[circleIndex]['mouseDown'] = false;
    } else {
      this.circles.forEach((circleTmp, i) => {
        this.circles[i]['mouseDown'] = false;
      });
    }
  }

  onBarClick(event) {
    let circle: Element;
    let circleIndex = 0;
    this.circles.forEach((circleTmp, index) => {
      if (circleTmp['focused']) {
        circle = circleTmp['domElement'];
        circleIndex = index;
      }
    });
    this.circles[circleIndex]['domInfoElement']['style']['visibility'] = 'visible';
    this.circles[circleIndex]['domElement'].focus();
    if (circle) {
      circle['style'].left = (event['pageX'] - this.offset - this.circleR) + 'px';
      this.circles[circleIndex]['position'] = this._pixelPositionTORangePosition(event['pageX'] - this.offset - this.circleR);
      this.handlePositionChange.emit(this.circles);
    }
  }

  _pixelPositionTORangePosition(x) {
    const rangeX = this.min + (this.max - this.min) * (x /  (document.getElementsByClassName('slider-bar-container')[0]['offsetWidth'] - 10));
    return this.step * Math.round(rangeX / this.step);
  }

  _rangePositionToPixelPosition(rangeX) {
    const x = (document.getElementsByClassName('slider-bar-container')[0]['offsetWidth'] - 10) * (rangeX / (this.max - this.min));
    return Math.round(x);
  }

  _setIds(circles) {
    circles.forEach((circle, index) => {
      const id = uuid.v4();
      this.circles[index]['id'] = 'slider-circle' + id;
      this.circles[index]['circleInfoId'] = 'slider-info-circle' + id;

      this.circles[index]['mouseDown'] = false;
      this.circles[index]['focused'] = false;
    });
  }

  _addDomElements(circles) {
    circles.forEach((circle, index) => {
      this.circles[index]['domElement'] = document.querySelector('#' + circle['id']);
      this.circles[index]['domInfoElement'] = document.querySelector('#' + circle['circleInfoId']);

      anime.remove(document.querySelector('#' + circle['id']));
      anime({
        targets: document.querySelector('#' + circle['id']),
        left: this._rangePositionToPixelPosition(circle['position'] - this.min),
        easing: 'easeOutQuad',
        duration: 200,
      });
    });
  }

  ngOnChanges(changes) {
    // if (changes && changes['circles'] && changes['circles']['currentValue'][0]['position']) {
    //   console.log(changes['circles']['currentValue'][0]['position']);
    //   this.circles = changes['circles']['currentValue'];
    // }
  }

}
