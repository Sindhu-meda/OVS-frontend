import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionofficerComponent } from './electionofficer.component';

describe('ElectionofficerComponent', () => {
  let component: ElectionofficerComponent;
  let fixture: ComponentFixture<ElectionofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionofficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
