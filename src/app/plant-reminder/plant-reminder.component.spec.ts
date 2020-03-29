import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantReminderComponent } from './plant-reminder.component';

describe('PlantReminderComponent', () => {
  let component: PlantReminderComponent;
  let fixture: ComponentFixture<PlantReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
