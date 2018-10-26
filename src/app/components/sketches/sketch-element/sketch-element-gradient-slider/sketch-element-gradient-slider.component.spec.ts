import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchElementGradientSliderComponent } from './sketch-element-gradient-slider.component';

describe('SketchElementGradientSliderComponent', () => {
  let component: SketchElementGradientSliderComponent;
  let fixture: ComponentFixture<SketchElementGradientSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchElementGradientSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchElementGradientSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
