import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersCollection!: AngularFirestoreCollection<User>;
  usersDoc!: AngularFirestoreDocument<User>;
  users!: Observable<User[]>;
  user!: Observable<User>;

  constructor() { }
}
