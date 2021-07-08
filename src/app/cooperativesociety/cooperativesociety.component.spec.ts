import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativesocietyComponent } from './cooperativesociety.component';

describe('CooperativesocietyComponent', () => {
  let component: CooperativesocietyComponent;
  let fixture: ComponentFixture<CooperativesocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativesocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativesocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
