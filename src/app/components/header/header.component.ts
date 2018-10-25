import { Component, OnInit } from '@angular/core';

import * as anime from 'animejs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTitleMouseover(action) {
    anime.remove('.header-title');
    switch (action) {
      case 'in':
        anime({
          targets: '.header-title',
          translateY: -5,
        });
        break;
      case 'out':
        anime({
          targets: '.header-title',
          translateY: 0,
        });
        break;
    }
  }

  // setActive(route) {
  //   switch (route) {
  //     case 'sketches':

  //   }
  // }

}
