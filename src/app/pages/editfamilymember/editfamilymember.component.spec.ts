import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfamilymemberComponent } from './editfamilymember.component';

describe('EditfamilymemberComponent', () => {
  let component: EditfamilymemberComponent;
  let fixture: ComponentFixture<EditfamilymemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfamilymemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfamilymemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
