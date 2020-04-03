// angular
import { NgModule } from '@angular/core';

// angular router
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantReminderComponent } from './plant-reminder/plant-reminder.component';
import { AddPlantComponent } from './add-plant/add-plant.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'home'} },
  { path: 'home/plantlist', component: PlantListComponent, data: { animation: 'plantlist'} },
  { path: 'home/plantreminderdetail', component: PlantReminderComponent, data: { animation: 'plantreminderdetail'} },
  { path: 'home/addplant', component: AddPlantComponent, data: { animation: 'addplant'} },
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
