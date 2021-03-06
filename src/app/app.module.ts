import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { YoutubeService } from '../providers/youtube-service';
import { VideoItem } from '../components/video-item/video-item';
import { MenuPage } from '../pages/menu/menu';
import { PlaylistPage } from '../pages/playlist/playlist';
import { PlaylistVideosPage } from '../pages/playlist-videos/playlist-videos';
import { WordpressService } from '../providers/wordpress-service';
import { PostsPage } from '../pages/posts/posts'
import { PostItem } from '../components/post-item/post-item';
import { ShowPostPage } from '../pages/show-post/show-post';
import { PostViewer } from '../components/post-viewer/post-viewer';
import { ShowVideoPage } from '../pages/show-video/show-video';
import { VideoPlayer } from '../components/video-player/video-player';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    HomePage,
    VideoItem,
    PostItem,
    PostViewer,
    VideoPlayer,
    PlaylistPage,
    PlaylistVideosPage,
    PostsPage,
    ShowPostPage,
    ShowVideoPage
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
    PlaylistVideosPage,
    PostsPage,
    ShowPostPage,
    ShowVideoPage
  ],
  providers: [YoutubeService, WordpressService]
})
export class AppModule {}
