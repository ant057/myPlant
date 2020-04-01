// angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// firestore
import { FirebaseService } from '../core/firebase.service';

// ngrx store
import * as fromApp from '../state/app.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'plant-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {
  // lists: Lists[];
  addPlantForm: FormGroup = new FormGroup({
    familyName: new FormControl(''),
    scientificName: new FormControl(''),
    sunlightHoursDaily: new FormControl(''),
    waterWeekly: new FormControl('')
  });

  constructor(private firestore: FirebaseService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addPlantForm.value);

    this.firestore.createPlant(this.addPlantForm.value)
      .then(
        res => {
          this.addPlantForm.reset();
        }
      );
  }

}
