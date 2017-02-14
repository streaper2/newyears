import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserProvider } from '../../providers/user-provider';
import { AuthData } from '../../providers/auth-data';
/*
  Generated class for the Profil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

    users = {};
    user ={};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public af: AngularFire,
              public auth: AuthData,
              public userProvider: UserProvider
              
              ) {


  af.database.list('/users').subscribe(x =>{
    this.users = x;
    console.log(this.users);

            this.userProvider.getUser()
        .then(userObservable => {
            userObservable.subscribe(user => {
                this.user = user;
            });
        });
  })




  }

  updatePicture() {
      this.userProvider.updatePicture();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
