import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-item',
  templateUrl: 'post-item.html'
})
export class PostItem {
  @Input() title: string;
  @Input() dateGMT: Date;
}
