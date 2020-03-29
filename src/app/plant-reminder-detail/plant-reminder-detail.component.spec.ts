import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantReminderDetailComponent } from './plant-reminder-detail.component';

describe('PlantReminderDetailComponent', () => {
  let component: PlantReminderDetailComponent;
  let fixture: ComponentFixture<PlantReminderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantReminderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantReminderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
