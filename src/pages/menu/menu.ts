import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PlaylistPage } from '../playlist/playlist';
import { PostsPage } from '../posts/posts';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  rootPage: any = HomePage;
  pages: Array<{title: string, icon: string, page: any}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      {title: 'Videos', icon: 'logo-youtube', page: HomePage},
      {title: 'Playlists', icon: 'list-box', page: PlaylistPage},
      {title: 'Posts', icon: 'logo-wordpress', page: PostsPage}
    ]
  }

  openPage(page: any) {
    this.rootPage = page;
  }

}
