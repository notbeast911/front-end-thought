import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecordsComponent } from './my-records.component';

describe('MyRecordsComponent', () => {
  let component: MyRecordsComponent;
  let fixture: ComponentFixture<MyRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
