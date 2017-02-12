import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
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

    users;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {


  af.database.list('/users').subscribe(x =>{
    this.users = x;
    console.log(this.users)
  })



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
