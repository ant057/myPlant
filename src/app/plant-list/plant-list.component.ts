// angular
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// rxjs
import { Observable } from 'rxjs';
// models
import { Plant } from '../models/plant/plant';
// ngrx store
import { Store, select } from '@ngrx/store';
import * as fromApp from '../state/app.reducer';
import * as appActions from '../state/app.actions';
// services
import { FirebaseService } from '../core/firebase.service';

@Component({
  selector: 'plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit, OnDestroy {

  plants$: Observable<Plant[]>;
  plantImageUrl$: Observable<string | null>;
  plantsLoading$: Observable<boolean>;
  componentActive = true;
  defaultElevation = 2;

  constructor(private store: Store<fromApp.AppState>,
              private router: Router,
              private firestore: FirebaseService) {
                // this.plantImageUrl$ = this.firestore.getImageURL('fa7d40ca-5378-eeaf-0689-d29fb8349a7f');
              }

  ngOnInit(): void {
    this.plantsLoading$ = this.store.pipe(select(fromApp.getPlantsLoading));
    this.plants$ = this.store.pipe(select(fromApp.getPlants));
  }

  navigate() {
    this.router.navigate(['home/addplant']);
  }

  getImageURL(imageId) {
    this.plantImageUrl$ = this.firestore.getImageURL(imageId);
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

}
