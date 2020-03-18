import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveradioComponent } from './liveradio.component';

describe('LiveradioComponent', () => {
  let component: LiveradioComponent;
  let fixture: ComponentFixture<LiveradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
