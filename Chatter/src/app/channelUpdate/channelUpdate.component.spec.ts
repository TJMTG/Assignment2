import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelUpdateComponent } from './channelUpdate.component';

describe('ChannelUpdateComponent', () => {
  let component: ChannelUpdateComponent;
  let fixture: ComponentFixture<ChannelUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
