import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { YoutubeService } from '../../providers/youtube-service';
import { ShowVideoPage } from '../show-video/show-video';

@Component({
  selector: 'page-playlist-videos',
  templateUrl: 'playlist-videos.html'
})
export class PlaylistVideosPage {

  title: string;
  videos: any = {};
  playlistId: string;

  constructor(private navCtrl: NavController, private params: NavParams,
    private loadingCtrl: LoadingController, private youtube: YoutubeService) {
    this.initPage();
  }

  initPage() {
    let loader = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loader.present();

    this.title = this.params.get('title');
    this.playlistId = this.params.get('playlistId');

    this.loadVideos().then(() => {
      loader.dismiss();
    });
  }

  loadVideos() {
    return new Promise(resolve => {
      this.youtube.getPlaylist(this.playlistId).subscribe(videos => {
        this.videos = videos;
        resolve();
      });
    });
  }

  onShow(video) {
    this.navCtrl.push(ShowVideoPage, { videoId: video.snippet.resourceId.videoId })
  }

}
