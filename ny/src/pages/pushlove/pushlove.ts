import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserProvider } from '../../providers/user-provider';

/*
  Generated class for the Pushlove page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pushlove',
  templateUrl: 'pushlove.html'
})
export class PushlovePage {

  pushMessage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {

     af.database.list('/pushlove').subscribe( x=> {
        this.pushMessage = x;
        console.log(this.pushMessage)
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushlovePage');

   
  }

}
