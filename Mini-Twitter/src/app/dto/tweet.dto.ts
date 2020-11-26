import {UserTweet} from "../interfaces/userTweet.interface";
import {LikeTweet} from "../interfaces/likeTweet.interface";

export class TweetDto{
  id:string;
  mensaje:string;
  likes:LikeTweet[];
  user:UserTweet[];
  constructor(mensaje,likes,user) {
    this.mensaje=mensaje;
    this.likes=likes;
    this.user=user;
  }
}
