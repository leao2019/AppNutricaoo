import { AngularFireAuthModule } from '@angular/fire/compat/auth/public_api';


import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUser(uid: string): import("rxjs").Observable<User> | PromiseLike<import("rxjs").Observable<User>> {
    throw new Error('Method not implemented.');
  }
  updateUserAuth(email: string, password: any, email1: string) {
    throw new Error('Method not implemented.');
  }
  updateUserData(userRegister: User, uid: any) {
    throw new Error('Method not implemented.');
  }

  Uid: string;

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore
    ) { }

  login(user:User){
    return this.afa.signInWithEmailAndPassword(user.email, user.password);
  }

  async register(user:User){
    await this.afa.createUserWithEmailAndPassword(user.email,user.password);
    this.Uid = (await(this.afa.currentUser)).uid;
  }

  tabela(user: User){
    delete user.password;
    return this.afs.doc('user/'+this.Uid)


  }

  logout(){

  }

  getAuth(){
    return this.afa;

  }
}