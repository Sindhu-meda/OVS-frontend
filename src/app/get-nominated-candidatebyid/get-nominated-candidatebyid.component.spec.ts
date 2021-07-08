import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNominatedCandidatebyidComponent } from './get-nominated-candidatebyid.component';

describe('GetNominatedCandidatebyidComponent', () => {
  let component: GetNominatedCandidatebyidComponent;
  let fixture: ComponentFixture<GetNominatedCandidatebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNominatedCandidatebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNominatedCandidatebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
