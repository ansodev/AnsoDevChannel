import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { ShowVideo } from '../show-video/show-video';
import { YoutubeService } from '../../providers/youtube-service';

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
     let modal = this.modalCtrl.create(ShowVideo, {
       videoId: video.id.videoId
     });

     modal.present();
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
