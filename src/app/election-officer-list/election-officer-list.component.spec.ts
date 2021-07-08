import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionOfficerListComponent } from './election-officer-list.component';

describe('ElectionOfficerListComponent', () => {
  let component: ElectionOfficerListComponent;
  let fixture: ComponentFixture<ElectionOfficerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionOfficerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionOfficerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
