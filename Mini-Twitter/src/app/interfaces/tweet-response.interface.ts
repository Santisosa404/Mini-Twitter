import { LikeTweet } from "./likeTweet.interface";
import {UserTweet} from "./userTweet.interface";

export interface TweetResponse{
  id: number;
  mensaje: string;
  likes: LikeTweet[];
  user: UserTweet[];
}
