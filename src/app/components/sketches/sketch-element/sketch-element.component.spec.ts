import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchElementComponent } from './sketch-element.component';

describe('SketchElementComponent', () => {
  let component: SketchElementComponent;
  let fixture: ComponentFixture<SketchElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
