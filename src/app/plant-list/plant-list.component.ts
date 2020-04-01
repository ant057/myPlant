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

@Component({
  selector: 'plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit, OnDestroy {

  plants$: Observable<Plant[]>;
  plantsLoading$: Observable<boolean>;
  componentActive = true;
  defaultElevation = 2;

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) { }

  ngOnInit(): void {
    this.plantsLoading$ = this.store.pipe(select(fromApp.getPlantsLoading));
    this.plants$ = this.store.pipe(select(fromApp.getPlants));
  }

  navigate() {
    this.router.navigate(['home/addplant']);
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

}
