import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TweetDto } from '../dto/tweet.dto';
import { TweetResponse } from '../interfaces/tweet-response.interface';

const LISTADO_URL='https://www.minitwitter.com:3001/apiv1/tweets/all';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')

  })
};
@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http:HttpClient) { }

  tweetAll(): Observable<TweetResponse[]>{
    return this.http.get<TweetResponse[]>(
      LISTADO_URL,
      httpOptions
          );
  }
}
