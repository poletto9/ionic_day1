import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  tt : string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tt = this.navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
