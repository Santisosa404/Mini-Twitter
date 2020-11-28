
export class TweetDto{
  id:string;
  mensaje:string;
  likes:any[];
  user:any[];
  constructor(mensaje,likes,user) {
    this.mensaje=mensaje;
    this.likes=likes;
    this.user=user;
  }
}
