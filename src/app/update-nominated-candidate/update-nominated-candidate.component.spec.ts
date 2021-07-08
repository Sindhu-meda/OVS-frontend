import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNominatedCandidateComponent } from './update-nominated-candidate.component';

describe('UpdateNominatedCandidateComponent', () => {
  let component: UpdateNominatedCandidateComponent;
  let fixture: ComponentFixture<UpdateNominatedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNominatedCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNominatedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
