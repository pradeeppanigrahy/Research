import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotInterfaceComponent } from './bot-interface.component';

describe('BotInterfaceComponent', () => {
  let component: BotInterfaceComponent;
  let fixture: ComponentFixture<BotInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
