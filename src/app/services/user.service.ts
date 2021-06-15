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
  users !: Observable<User[]>;
  user!: Observable<User>;

  constructor(private afs: AngularFirestore) { 
    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('lastName','asc')); 
  }

  getUsers(): Observable<User[]>{
    //GetUsers with the id

    this.users = this.usersCollection.snapshotChanges().map((changes: any[]) => {
      return changes.map(action =>{
        const data = action.payload.doc.data() as User;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.users;
  }
}
