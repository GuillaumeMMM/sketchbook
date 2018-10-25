import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sketch-element-navbars-navigation',
  templateUrl: './sketch-element-navbars-navigation.component.html',
  styleUrls: ['./sketch-element-navbars-navigation.component.scss']
})
export class SketchElementNavbarsNavigationComponent implements OnInit {

  constructor() { }

  @Output() handleChangeTab = new EventEmitter<String>();

  activeRoute = 'shadows';

  ngOnInit() {
  }

  goToTab(route) {
    document.getElementsByClassName(this.activeRoute)[0].classList.remove('active');
    document.getElementsByClassName(route)[0].classList.add('active');
    this.activeRoute = route;
    this.handleChangeTab.emit(route);
  }

}
