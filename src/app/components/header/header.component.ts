import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as anime from 'animejs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const initialRoute = location.pathname.substr(1, location.pathname.length - 1);

    if (initialRoute === 'contact') {
      document.getElementsByClassName('active')[0].classList.remove('active');
      document.getElementsByClassName(initialRoute)[0].classList.add('active');
    }
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

  setActive(route) {
    document.getElementsByClassName('active')[0].classList.remove('active');
    document.getElementsByClassName(route)[0].classList.add('active');
    this.router.navigate(['/' + route]);
  }
}
