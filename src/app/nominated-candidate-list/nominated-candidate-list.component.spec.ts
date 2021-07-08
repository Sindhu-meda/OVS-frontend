import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominatedCandidateListComponent } from './nominated-candidate-list.component';

describe('NominatedCandidateListComponent', () => {
  let component: NominatedCandidateListComponent;
  let fixture: ComponentFixture<NominatedCandidateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominatedCandidateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominatedCandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
