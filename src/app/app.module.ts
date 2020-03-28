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

// angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { fromEventPattern } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
    MatToolbarModule
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
