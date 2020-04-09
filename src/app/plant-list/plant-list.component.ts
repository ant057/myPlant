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
    // this.plantImageUrl$ = this.firestore.getImageURL('fa7d40ca-5378-eeaf-0689-d29fb8349a7f');
  }

  ngOnInit(): void {
    this.plantsLoading$ = this.store.pipe(select(fromApp.getPlantsLoading));
    this.plants$ = this.store.pipe(select(fromApp.getPlants));

    const aSubscription = this.plants$.subscribe( //takeWhile(),
      {
        next: (data) => {
          if (data) {
            data.forEach(x => {
              this.plantFileNames.push(x.imageId);
          });
            this.plantFileNames.forEach(x => {
              this.getImageURL(x);
            });
            //console.log(this.plantFileNames);
            //console.log(this.plantUrls);
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
    this.plantUrls.push(this.firestore.getImageURL(imageId).toPromise().then(x => x));
    console.log(this.plantUrls);
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

}
