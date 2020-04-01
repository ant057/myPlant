// angular
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { Observable } from 'rxjs';
import { map, tap, takeWhile } from 'rxjs/operators';

// ngrx store
import { select, Store } from '@ngrx/store';
// import * as fromAuth from '../auth/state/auth.reducer';
import * as fromApp from '../state/app.reducer';
import * as appActions from '../state/app.actions';

// models
import { Plant } from '../models/plant/plant';

// components
// import { AddPaymentComponent } from '../add-payment/add-payment.component';


@Component({
  selector: 'plant-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  plants$: Observable<Plant[]>;
  plantsLoading$: Observable<boolean>;
  componentActive = true;

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) { }

  ngOnInit() {

    this.plantsLoading$ = this.store.pipe(select(fromApp.getPlantsLoading));

    //// for when auth is setup
    // this.store.pipe(
    //   select(fromAuth.getuid),
    //   takeWhile(() => this.componentActive))
    //   .subscribe(
    //     uid => {
    //       if (uid) {
    //         this.store.dispatch(new appActions.LoadHouseholds(uid));
    //       }
    //     }
    //   );

    this.store.dispatch(new appActions.LoadPlants('123'));
    this.plants$ = this.store.pipe(select(fromApp.getPlants));
  }

  // openHouseholdEvent() {
  //   this.windowService.open(AddHouseholdComponent, { title: `Add Household` });
  // }

  ngOnDestroy() {
    this.componentActive = false;
  }

  // selectHousehold(household: Household) {
  //   this.store.dispatch(new appActions.SelectHousehold(household));
  //   this.router.navigate(['/household']);
  // }
}
