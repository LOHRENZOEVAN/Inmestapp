import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQueriesComponent } from './my-queries.component';

describe('MyQueriesComponent', () => {
  let component: MyQueriesComponent;
  let fixture: ComponentFixture<MyQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyQueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
