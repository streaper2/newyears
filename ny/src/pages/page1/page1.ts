import { Component  } from '@angular/core';
import {Http} from '@angular/http';
import { NavController, NavParams  } from 'ionic-angular';

import { PushlovePage } from '../pushlove/pushlove';

import {MeteoService} from '../../providers/meteo';

import 'rxjs/Rx';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [MeteoService]
})
export class Page1 {
public meteos: any;

  constructor(public navCtrl: NavController, public params: NavParams,public meteoService: MeteoService) {
             
             
            
             this.loadMeteo();
             	
              }
              
                goToLove() {
                    this.navCtrl.push(PushlovePage);

              };

                loadMeteo(){
                  this.meteoService.load()
                  .then(data => {
                    
                    this.meteos = data;
                    console.log(data)
                  });
                }
}
