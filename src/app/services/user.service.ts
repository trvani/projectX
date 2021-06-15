import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/users';

@Injectable(
//  {
//  providedIn: 'root'
//}
)
export class UserService {

  usersCollection!: AngularFirestoreCollection<User>;
  usersDoc!: AngularFirestoreDocument<User>;
  users !: Observable<User[]>;
  user!: Observable<User>;

  constructor(private afs: AngularFirestore) { 
    this.usersCollection = this.afs.collection('Tb_User',ref => ref.orderBy('LastName','asc')); 
  }

  getUsers(): Observable<User[]>{
    //GetUsers with the id

    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as User;
        data.id = action.payload.doc.id;
 
        return data;
      });
    }));

    //this.users = this.usersCollection.snapshotChanges().map((changes: any[]) => {
    //  return changes.map(action =>{
    //    const data = action.payload.doc.data() as User;
    //    data.id = action.payload.doc.ID;
    //    return data;
    //  });
    //});
    return this.users;
  }
}
