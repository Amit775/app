import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaComponent } from './ba.component';

describe('BaComponent', () => {
  let component: BaComponent;
  let fixture: ComponentFixture<BaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
