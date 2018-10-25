import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sketch-element-navbars',
  templateUrl: './sketch-element-navbars.component.html',
  styleUrls: ['./sketch-element-navbars.component.scss']
})
export class SketchElementNavbarsComponent implements OnInit {

  constructor() { }

  currentRoute = 'shadows';

  ngOnInit() {

  }

  handleChangeRoute(route) {
    this.currentRoute = route;
  }
}
