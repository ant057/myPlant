// angular
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { Observable } from 'rxjs';
import { map, tap, takeWhile } from 'rxjs/operators';

// ngrx store
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../auth/state/auth.reducer';
import * as fromApp from '../state/app.reducer';
import * as appActions from '../state/app.actions';

// models
import { Household } from '../models/household/household';

// components
import { AddPaymentComponent } from '../add-payment/add-payment.component';
import { AddEventComponent } from '../add-event/add-event.component';
import { AddHouseholdComponent } from '../add-household/add-household.component';

// nebular
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'hint-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  households$: Observable<Household[]>;
  householdsLoading$: Observable<boolean>;
  componentActive = true;

  constructor(private store: Store<fromAuth.State>,
              private windowService: NbWindowService,
              private router: Router) { }

  ngOnInit() {

    this.householdsLoading$ = this.store.pipe(select(fromApp.getHouseholdsLoading));

    this.store.pipe(
      select(fromAuth.getuid),
      takeWhile(() => this.componentActive))
      .subscribe(
        uid => {
          if (uid) {
            this.store.dispatch(new appActions.LoadHouseholds(uid));
          }
        }
      );

    this.households$ = this.store.pipe(select(fromApp.getHouseholds));
  }

  openAddPayment() {
    this.windowService.open(AddPaymentComponent, { title: `Add Payment` });
  }

  openAddEvent() {
    this.windowService.open(AddEventComponent, { title: `Add Event` });
  }

  openHouseholdEvent() {
    this.windowService.open(AddHouseholdComponent, { title: `Add Household` });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  selectHousehold(household: Household) {
    this.store.dispatch(new appActions.SelectHousehold(household));
    this.router.navigate(['/household']);
  }
}
