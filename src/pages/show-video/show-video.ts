import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-show-video',
  templateUrl: 'show-video.html'
})
export class ShowVideo {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {}

  onClose() {
    this.viewCtrl.dismiss();
  }

}
