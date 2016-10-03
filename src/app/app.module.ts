import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { YoutubeService } from '../providers/youtube-service';
import { VideoItem } from '../components/video-item/video-item';
import { MenuPage } from '../pages/menu/menu';
import { PlaylistPage } from '../pages/playlist/playlist';
import { PlaylistVideosPage } from '../pages/playlist-videos/playlist-videos';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    HomePage,
    VideoItem,
    PlaylistPage,
    PlaylistVideosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    HomePage,
    PlaylistPage,
    PlaylistVideosPage
  ],
  providers: [YoutubeService]
})
export class AppModule {}
