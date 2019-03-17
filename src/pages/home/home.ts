import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LmagePage } from '../lmage/lmage'
import { SlidesPage } from '../slides/slides'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoAbout(){
    this.navCtrl.push(AboutPage);

  }

  gotoContact(){
  this.navCtrl.push(ContactPage);

  } 

  gotoLmagePage(){
    this.navCtrl.setRoot(LmagePage);

  } 

  gotoSlidesPage(){
    this.navCtrl.setRoot(SlidesPage);
  
    } 
}
