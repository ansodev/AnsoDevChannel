import {Component, Input} from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'video-player',
  templateUrl: 'video-player.html'
})
export class VideoPlayer {
  @Input() videoId: string;

  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}?enablejsapi=1&autoplay=1`);
  }
}
