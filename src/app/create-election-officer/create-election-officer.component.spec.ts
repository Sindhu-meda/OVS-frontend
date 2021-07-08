import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectionOfficerComponent } from './create-election-officer.component';

describe('CreateElectionOfficerComponent', () => {
  let component: CreateElectionOfficerComponent;
  let fixture: ComponentFixture<CreateElectionOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElectionOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElectionOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
