// angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
// firestore
import { FirebaseService } from '../core/firebase.service';
// ngrx store
import * as fromApp from '../state/app.reducer';
import { Store, select } from '@ngrx/store';
// models
import { Lists } from '../models/app/list';
// directives
import { FileHandle } from '../directives/drag-drop.directive';
// utility
import { Guid } from 'guid-typescript';

@Component({
  selector: 'plant-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {
  lists: Lists[];
  addPlantForm: FormGroup = new FormGroup({
    familyName: new FormControl(''),
    scientificName: new FormControl(''),
    sunlightHoursDaily: new FormControl(''),
    waterWeekly: new FormControl(''),
    location: new FormControl(''),
    waterFrequency: new FormControl('')
  });
  files: FileHandle[] = [];
  imageId: Guid;

  constructor(private firestore: FirebaseService,
              private store: Store<fromApp.AppState>,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.store.pipe(select(fromApp.getLists)).subscribe((lists: Lists[]) => {
      this.lists = lists;
    });
  }

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  uploadImage(): void {
    this.firestore.uploadImage(this.files[0].file, this.imageId.toString());
  }

  onSubmit(formDirective: FormGroupDirective) {
    // TODO: Use EventEmitter with form value
    console.warn(this.addPlantForm.value);

    if (this.files.length > 0) {
      this.imageId = Guid.create();
    }

    let waterReminder: string;
    switch (this.addPlantForm.value.waterFrequency) {
      case 'Daily':
        waterReminder = 'Tomrorow!';
        break;
      case 'Weekly':
        waterReminder = 'in One Week!';
        break;
      case 'Bi-Weekly':
        waterReminder = 'in Two Weeks!';
        break;
      case 'Monthly':
        waterReminder = 'in One Month!';
        break;
      case 'Never':
        waterReminder = '..Never!!';
        break;
      default:
        waterReminder = '!';
        break;
    }

    this.firestore.createPlant(this.addPlantForm.value, this.imageId) // promise??
      .then(
        res => {
          if (this.files.length > 0) {
            this.uploadImage(); // here??
          }
          this.files = [];
          this.addPlantForm.reset();
          formDirective.resetForm();
          this.openSnackBar(`Succesfully Saved! We will reminder you to water this plant ${waterReminder}`, 'Close');
        }
      );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'top'
    });
  }

}
