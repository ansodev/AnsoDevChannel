import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-item',
  templateUrl: 'video-item.html'
})
export class VideoItem {
  @Input() thumbnail: string;
  @Input() title: string;
  @Input() description: string;
  @Input() video: string;

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  onShow(video) {
    this.clicked.emit({ video });
  }
}
