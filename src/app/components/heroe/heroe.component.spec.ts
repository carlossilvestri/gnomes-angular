import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeComponent } from './heroe.component';

describe('HeroeComponent', () => {
  let component: HeroeComponent;
  let fixture: ComponentFixture<HeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
