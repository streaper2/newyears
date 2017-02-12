import { Component  } from '@angular/core';

import { NavController, NavParams  } from 'ionic-angular';

import { PushlovePage } from '../pushlove/pushlove';



@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public params: NavParams) {
             
             
            
             
             	
              }
              
                goToLove() {
                    this.navCtrl.push(PushlovePage);

              };
}
