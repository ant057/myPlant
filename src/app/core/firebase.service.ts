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

  getPlants() {
    return this.afs.collection('/plants').snapshotChanges();
  }

  getMyPlants(uid: string) {
    return this.afs.collection('/plants', ref => ref.where('userId' , '==', uid)).valueChanges();
  }

  getMyHouseholds(uid: string) {
    return this.afs.collection('/household', ref => ref.where('userId' , '==', uid)).valueChanges();
  }

  createPayment(value) {
    return this.afs.collection('/payments').add({
      account: value.account,
      amount: value.amount,
      description: value.description,
      paymentDate: value.paymentDate,
      occurrences: value.occurrences,
      recurringFrequency: value.recurringFrequency,
      recurringYN: value.recurringYN,
      userId: 'G3LkTagze1by9jFarqjiksEAfel1'
    });
  }
}
