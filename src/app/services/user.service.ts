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
    return this.users;
  }

  newUser(usr:User){
    this.usersCollection.add(usr);
  }

  getUser(id: string): Observable<User>
  {
    this.usersDoc = this.afs.doc<User>('users/${id}');
    this.user = this.usersDoc.snapshotChanges().pipe(
      map(action => {
        if(action.payload.exists === false){
          return null
        }else{
          const data  = action.payload.data() as User;
          data.id = action.payload.id;
          return data;
        }
      })
    )
    return this.user
  }
}
