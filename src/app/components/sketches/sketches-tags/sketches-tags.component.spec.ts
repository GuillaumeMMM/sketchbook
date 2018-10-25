import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchesTagsComponent } from './sketches-tags.component';

describe('SketchesTagsComponent', () => {
  let component: SketchesTagsComponent;
  let fixture: ComponentFixture<SketchesTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchesTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchesTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
