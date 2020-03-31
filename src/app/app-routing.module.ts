// angular
import { NgModule } from '@angular/core';

// angular router
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { PlantReminderComponent } from './plant-reminder/plant-reminder.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/plantlist', component: PlantListComponent },
  { path: 'home/plantdetail', component: PlantDetailComponent },
  { path: 'home/plantreminderdetail', component: PlantReminderComponent },
  /* { path: 'hero/:id',      component: HeroDetailComponent },
   {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }, */
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})], // disable for prod
  exports: [RouterModule]
})
export class AppRoutingModule { }
