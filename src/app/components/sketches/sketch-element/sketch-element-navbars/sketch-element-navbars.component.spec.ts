import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchElementNavbarsComponent } from './sketch-element-navbars.component';

describe('SketchElementNavbarsComponent', () => {
  let component: SketchElementNavbarsComponent;
  let fixture: ComponentFixture<SketchElementNavbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchElementNavbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchElementNavbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
