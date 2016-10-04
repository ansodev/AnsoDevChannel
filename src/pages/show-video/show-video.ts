import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

@Component({
  selector: 'page-show-video',
  templateUrl: 'show-video.html'
})
export class ShowVideoPage {

  videoId: string;

constructor(private navCtrl: NavController, private params: NavParams, private platform: Platform) {
  this.initPage();

  platform.ready().then(() => {
    document.addEventListener('pause', () => {
      this.navCtrl.pop();
    });
  })
}


private initPage() {
  this.videoId = this.params.get('videoId');
}

}
