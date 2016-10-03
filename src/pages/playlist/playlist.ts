import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { YoutubeService } from '../../providers/youtube-service';
import { PlaylistVideosPage } from '../playlist-videos/playlist-videos';

@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html'
})
export class PlaylistPage {

  nextPage: string;
  playlists: any = [];
  disable: boolean;

  constructor(private navCtrl: NavController, private youtube: YoutubeService,
    private loadingCtrl: LoadingController) {
    this.initPage();
  }

  private initPage() {
    let loader = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loader.present();

    this.loadPlaylist().then(() => {
      loader.dismiss();
    });
  }

  private loadPlaylist() {
    return new Promise(resolve => {
      this.youtube.getAllPlayList(this.nextPage).subscribe(playlists => {
        this.nextPage = playlists.nextPageToken;

        for (let i = 0; i < playlists.items.length; i++) {
          this.playlists.push(playlists.items[i]);
        }

        this.disable = this.playlists.length >= playlists.pageInfo.totalResults;

        resolve();
      });
    });

  }

  onSelect(playlist) {
    this.navCtrl.push(PlaylistVideosPage, {
      title: playlist.snippet.title,
      playlistId: playlist.id.playlistId
    });
  }

}
