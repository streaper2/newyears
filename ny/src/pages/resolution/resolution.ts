import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Resolution page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resolution',
  templateUrl: 'resolution.html'
})
export class ResolutionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
    private brightness = 100;
    private love = 100;
    private colere = 20;
    private money = 75;
    private snow = 2;

    


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResolutionPage');
  }
}
