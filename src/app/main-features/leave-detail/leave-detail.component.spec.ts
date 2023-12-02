import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDetailComponent } from './leave-detail.component';

describe('LeaveDetailComponent', () => {
  let component: LeaveDetailComponent;
  let fixture: ComponentFixture<LeaveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
