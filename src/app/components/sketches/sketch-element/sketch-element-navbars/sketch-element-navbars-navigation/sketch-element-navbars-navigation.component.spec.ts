import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchElementNavbarsNavigationComponent } from './sketch-element-navbars-navigation.component';

describe('SketchElementNavbarsNavigationComponent', () => {
  let component: SketchElementNavbarsNavigationComponent;
  let fixture: ComponentFixture<SketchElementNavbarsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchElementNavbarsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchElementNavbarsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
