import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {

  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://www.googleapis.com/youtube/v3';
  }

  getAllVideos(nextPage: string): any {
    let params = this.getAllVideoParams(nextPage);

    return this.getYoutubeList(params);
  }

  getAllPlayList(nextPage: string) {
    let params = this.getAllPlaylistParams(nextPage);

    return this.getYoutubeList(params);
  }

  getPlaylist(id: string) : any {
    let params = this.getPlaylistParams(id);
    return this.http.get(`${this.baseUrl}/playlistItems`, {
      search: params
    })
    .map(response => response.json());
  }

  private getYoutubeList(params: URLSearchParams): any {
    return this.http.get(`${this.baseUrl}/search`, {
      search: params
    })
    .map(response => response.json());
  }

  private getPlaylistParams(id: string) {
    let params = this.getBaseParams('', '50');
    params.set('playlistId', id);
    return params;
  }

  private getAllPlaylistParams(nextPage: string): URLSearchParams {
    let params = this.getBaseParams(nextPage, '10');
    params.set('type', 'playlist');
    return params;
  }

  private getAllVideoParams(nextPage: string): URLSearchParams {
    let params = this.getBaseParams(nextPage, '10');
    params.set('type', 'video');
    return params;
  }

  private getBaseParams(nextPage: string, maxResults: string): URLSearchParams {
    let params = new URLSearchParams();

    params.set('key', '[Sua key aqui]');
    params.set('maxResults', maxResults);
    params.set('part', 'id, snippet');
    params.set('order', 'date');
    params.set('channelId', 'UCeEY4eHe6kKDzfa9TH3RjVw');

    if (nextPage) {
      params.set('pageToken', nextPage);
    }

    return params;
  }

}
