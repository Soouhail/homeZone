import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
loading : boolean;

  constructor(
  private navCtrl:NavController,
  private router : Router
  ){
    this.getData();
}
getData(){
  this.loading=true;
  setTimeout(()=>{
this.loading = false;
 this.router.navigate(['page2']);
  },1000)

}
toPageTwo(){
  this.navCtrl.navigateForward('page2')

}
}
