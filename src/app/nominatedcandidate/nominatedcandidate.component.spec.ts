import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominatedcandidateComponent } from './nominatedcandidate.component';

describe('NominatedcandidateComponent', () => {
  let component: NominatedcandidateComponent;
  let fixture: ComponentFixture<NominatedcandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominatedcandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominatedcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
