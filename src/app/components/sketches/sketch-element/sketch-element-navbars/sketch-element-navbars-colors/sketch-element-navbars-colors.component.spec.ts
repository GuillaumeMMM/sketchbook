import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchElementNavbarsColorsComponent } from './sketch-element-navbars-colors.component';

describe('SketchElementNavbarsColorsComponent', () => {
  let component: SketchElementNavbarsColorsComponent;
  let fixture: ComponentFixture<SketchElementNavbarsColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchElementNavbarsColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchElementNavbarsColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
