import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredSocietyVotersComponent } from './registered-society-voters.component';

describe('RegisteredSocietyVotersComponent', () => {
  let component: RegisteredSocietyVotersComponent;
  let fixture: ComponentFixture<RegisteredSocietyVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredSocietyVotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredSocietyVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
