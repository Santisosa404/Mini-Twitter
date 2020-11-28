import { Component, OnInit } from '@angular/core';
import { TweetDto } from 'src/app/dto/tweet.dto';
import { TweetResponse } from 'src/app/interfaces/tweet-response.interface';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  listaTweet:TweetResponse[];
  columsToDisplay=["id","mensaje","likes","user"];
  constructor(private tweetService:TweetService) {
    this.listaTweet=[];
   }

  ngOnInit(): void {
  this.cargarTweet();
  console.log(this.listaTweet);
  }

  cargarTweet(){
    this.tweetService.tweetAll().subscribe(tweet =>{
      tweet.forEach(element => {
        this.listaTweet.push(element);
      });
    });
  }
  darLike(id:number){
    this.tweetService.likeTweet(id);
    alert("Tweet marcado como favorito");

  }
}
