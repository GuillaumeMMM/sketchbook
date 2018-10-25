import { Component, OnInit } from '@angular/core';

import * as anime from 'animejs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMouseOverIcon(action, element) {
    anime.remove(element);
    switch (action) {
      case 'in':
      anime({
        targets: element,
        translateY: -10,
        borderColor: '#ffffff',
      });
      break;
      case 'out':
      anime({
        targets: element,
        translateY: 0,
        borderColor: '#152935',
        easing: 'linear',
        duration: 300
      });
      break;
    }
  }

}
