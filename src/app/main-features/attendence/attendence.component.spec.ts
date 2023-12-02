import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceComponent } from './attendence.component';

describe('AttendenceComponent', () => {
  let component: AttendenceComponent;
  let fixture: ComponentFixture<AttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
