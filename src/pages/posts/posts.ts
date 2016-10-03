import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { WordpressService } from '../../providers/wordpress-service';
import { ShowPostPage } from '../show-post/show-post';

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

  private posts: any = [];
  constructor(private navCtrl: NavController, private wordpress: WordpressService,
    private loadingCtrl: LoadingController) {
    this.initPage();
  }

  initPage() {
    let loader = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loader.present();

    this.loadPosts().then(() => {
      loader.dismiss();
    })
  }

  private loadPosts() {
    return new Promise(resolve => {
      this.wordpress.getAllPosts().subscribe(posts => {
        this.posts = posts;

        resolve();
      });
    });
  }

  onShow(post) {
    this.navCtrl.push(ShowPostPage, { postId: post.id });
  }

}
