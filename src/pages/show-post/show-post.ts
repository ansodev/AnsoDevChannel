import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { WordpressService } from '../../providers/wordpress-service';


@Component({
  selector: 'page-show-post',
  templateUrl: 'show-post.html'
})
export class ShowPostPage {

  private post: string;
  private title: string;

  constructor(private navCtrl: NavController, private params: NavParams,
    private wordpress: WordpressService, private loadingCtrl: LoadingController) {
    this.initPage();
  }

  initPage() {
    let loader = this.loadingCtrl.create({
      content: 'Loading'
    });

    loader.present();

    let postId = this.params.get('postId');
    this.loadPost(postId).then(() => {
      loader.dismiss();
    });
  }

  loadPost(postId: string) {
    return new Promise(resolve => {
      this.wordpress.getPost(postId).subscribe(post => {
        this.post = post.content.rendered;
        this.title = post.title.rendered;
        resolve();
      });
    });
  }

}
