import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateElectionOfficerComponent } from './update-election-officer.component';

describe('UpdateElectionOfficerComponent', () => {
  let component: UpdateElectionOfficerComponent;
  let fixture: ComponentFixture<UpdateElectionOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateElectionOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateElectionOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
