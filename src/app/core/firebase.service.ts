// angular
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

// rxjs
import { Observable, from } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';

// Models
// import { Payment } from '../models/payment/payment';

@Injectable()
export class FirebaseService {

  constructor(private afs: AngularFirestore) {
  }

  getLists() {
    return this.afs.collection(`/lists`).valueChanges();
  }

  getPlants() {
    return this.afs.collection('/plants').snapshotChanges();
  }

  getMyPlants(uid: string) {
    return this.afs.collection('/plants', ref => ref.where('uid' , '==', uid)).valueChanges();
  }

  getMyHouseholds(uid: string) {
    return this.afs.collection('/household', ref => ref.where('userId' , '==', uid)).valueChanges();
  }

  createPlant(value) {
    return this.afs.collection('/plants').add({
      familyName: value.familyName,
      scientificName: value.scientificName,
      sunlightHoursDaily: value.sunlightHoursDaily,
      waterWeekly: value.waterWeekly,
      location: 'Backyard',
      uid: '123'
    });
  }
}
