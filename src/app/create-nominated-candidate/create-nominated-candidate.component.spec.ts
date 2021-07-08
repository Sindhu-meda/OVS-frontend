import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNominatedCandidateComponent } from './create-nominated-candidate.component';

describe('CreateNominatedCandidateComponent', () => {
  let component: CreateNominatedCandidateComponent;
  let fixture: ComponentFixture<CreateNominatedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNominatedCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNominatedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
