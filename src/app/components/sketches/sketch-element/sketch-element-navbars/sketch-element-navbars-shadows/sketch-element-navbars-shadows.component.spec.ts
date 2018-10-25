import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchElementNavbarsShadowsComponent } from './sketch-element-navbars-shadows.component';

describe('SketchElementNavbarsShadowsComponent', () => {
  let component: SketchElementNavbarsShadowsComponent;
  let fixture: ComponentFixture<SketchElementNavbarsShadowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchElementNavbarsShadowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchElementNavbarsShadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
