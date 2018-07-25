import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroptargetComponent } from './droptarget.component';

describe('DroptargetComponent', () => {
  let component: DroptargetComponent;
  let fixture: ComponentFixture<DroptargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroptargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroptargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
