import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShowVideo } from '../pages/show-video/show-video';
import { YoutubeService } from '../providers/youtube-service';
import { VideoItem } from '../components/video-item/video-item';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShowVideo,
    VideoItem
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShowVideo
  ],
  providers: [YoutubeService]
})
export class AppModule {}
