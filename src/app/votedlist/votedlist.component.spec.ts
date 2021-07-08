import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedListComponent } from './votedlist.component';

describe('VotedListComponent', () => {
  let component: VotedListComponent;
  let fixture: ComponentFixture<VotedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
