import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AabComponent } from './aab.component';

describe('AabComponent', () => {
  let component: AabComponent;
  let fixture: ComponentFixture<AabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
