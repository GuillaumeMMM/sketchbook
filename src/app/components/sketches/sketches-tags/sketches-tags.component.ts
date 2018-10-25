import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sketches-tags',
  templateUrl: './sketches-tags.component.html',
  styleUrls: ['./sketches-tags.component.scss']
})
export class SketchesTagsComponent implements OnInit {

  constructor() { }

  @Input() sketches: Object[] = [];

  tags: string[] = [];

  ngOnInit() {
    this.sketches.forEach((sketch) => {
      sketch['tags'].forEach((tag) => {
        if (this.tags.indexOf(tag) === -1) {
          this.tags.push(tag);
        }
      });
    });
  }

}
