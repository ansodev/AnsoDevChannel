import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordpressService {

  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://ansodev.com/wp-json/wp/v2';
  }

  getAllPosts() : any {
    let params = new URLSearchParams();

    params.set('order', 'desc');
    params.set('context', 'embed')

    return this.http.get(`${this.baseUrl}/posts`, {
      search: params
    })
    .map(response => response.json());
  }

  getPost(id: string) : any {
    return this.http.get(`${this.baseUrl}/posts/${id}`)
      .map(response => response.json());
  }

}
