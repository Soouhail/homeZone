import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  constructor(
    private modalCtrl : ModalController, 
    private navCtrl : NavController,
    private router : Router
  ){
  }
  ngOnInit() {
  }

toPageOwner(){
  this.navCtrl.navigateForward('page6')

}
  toPageStudent(){
   this.navCtrl.navigateForward('page3')
  }
}
  
