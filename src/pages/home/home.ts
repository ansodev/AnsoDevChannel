import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { YoutubeService } from '../../providers/youtube-service';
import { ShowVideoPage } from '../show-video/show-video';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   videos: any = [];
   nextPage: string;
   disable: boolean;

   constructor(public navCtrl: NavController, private youtube: YoutubeService,
     private loadingCtrl: LoadingController, private modalCtrl: ModalController) {
     this.initPage();
   }

   doInfinite(infiniteScroll) {
     if (this.disable) {
       infiniteScroll.enable(false);
     }
     else {
       setTimeout(() => {
         this.loadVideos().then(() => {
           infiniteScroll.complete();
         });
       }, 500);
     }
   }

   onShow(video) {
     this.navCtrl.push(ShowVideoPage, { videoId: video.id.videoId })
   }

   private initPage() {
     let loader = this.loadingCtrl.create({
       content: 'Loading...'
     });

     loader.present();

     this.loadVideos().then(() => {
       loader.dismiss();
     });
   }

   private loadVideos() {
     return new Promise(resolve => {
       this.youtube.getAllVideos(this.nextPage).subscribe(videos => {
         this.nextPage = videos.nextPageToken;

         for (let i = 0; i < videos.items.length; i++) {
           this.videos.push(videos.items[i]);
         }

         this.disable = this.videos.length >= videos.pageInfo.totalResults;

         resolve();
       });
     })
   }

}
