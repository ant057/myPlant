// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// animations
import { fadeInAnimation } from './animations';

// ngrx
import * as fromApp from './state/app.reducer';
import * as appActions from './state/app.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation]
})
export class AppComponent implements OnDestroy, OnInit {
  theme: string;

  constructor(
    private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.initializeAppData();
  }

  initializeAppData() {
    this.store.dispatch(new appActions.LoadLists());
    this.store.dispatch(new appActions.LoadPlants('123'));
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnDestroy() {
  }
}
