import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-viewer',
  templateUrl: 'post-viewer.html'
})
export class PostViewer {
  @Input() post: string;
}
