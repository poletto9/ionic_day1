import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goNews(){
    this.navCtrl.push('NewsPage',{title:'ข่าวสาร'}) // call class in ts file of page
  }
}
