// bootstrap
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// feature modules
import { CoreModule } from './core/core.module';
// import { AuthModule } from './auth/auth.module';

// ngrx store
import { StoreModule } from '@ngrx/store';
// import { DevtoolsModule } from '@ngrx/devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/app.reducer';
import { AppEffects } from './state/app.effects';

// vars
import { environment } from '../environments/environment';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantReminderComponent } from './plant-reminder/plant-reminder.component';
import { PlantReminderDetailComponent } from './plant-reminder-detail/plant-reminder-detail.component';

// angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { fromEventPattern } from 'rxjs';
import { MatElevationHoverDirective } from './directives/mat-elevation-hover.directive';
import { AddPlantComponent } from './add-plant/add-plant.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PlantListComponent,
    PlantReminderComponent,
    PlantReminderDetailComponent,
    MatElevationHoverDirective,
    AddPlantComponent
  ],
  entryComponents: [
    // AddPaymentComponent
  ],
  imports: [
    CoreModule,
    // AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // FlexLayoutModule,
    StoreModule.forRoot({ app: reducer}),
    EffectsModule.forRoot([AppEffects]),
    MatSliderModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
    // DevtoolsModule.instrument({
    //   name: 'myPlant OS Dev tools',
    //   maxAge: 25,
    //   logOnly: environment.production
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
