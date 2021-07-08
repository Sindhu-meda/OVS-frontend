import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetElectionOfficerByIdComponent } from './get-election-officer-by-id.component';

describe('GetElectionOfficerByIdComponent', () => {
  let component: GetElectionOfficerByIdComponent;
  let fixture: ComponentFixture<GetElectionOfficerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetElectionOfficerByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetElectionOfficerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
