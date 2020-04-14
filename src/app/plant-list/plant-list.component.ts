// angular
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// rxjs
import { Observable, from } from 'rxjs';
import { flatMap, takeWhile } from 'rxjs/operators';
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

  plantFileNames = [];
  plantUrls = [];

  constructor(private store: Store<fromApp.AppState>,
              private router: Router,
              private firestore: FirebaseService) {
  }

  ngOnInit(): void {
    this.plantsLoading$ = this.store.pipe(select(fromApp.getPlantsLoading));
    this.plants$ = this.store.pipe(select(fromApp.getPlants));

    const aSubscription = this.plants$.subscribe( // takeWhile(),
      {
        next: (plants) => {
          if (plants) {
            plants.forEach(plant => {
              if (plant.imageId !== '') {
                this.getImageURL(plant.imageId);
              }
            });
          }
        },
        error(msg) {
          console.log(msg);
        }
      }
    );
  }

  navigate() {
    this.router.navigate(['home/addplant']);
  }

  getImageURL(imageId) {
    this.firestore.getImageURL(imageId).toPromise().then(x => this.plantUrls.push(x));
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

}
