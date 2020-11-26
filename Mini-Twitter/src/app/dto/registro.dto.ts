export class RegistroDto{
  username:string;
  email:string;
  password:string;
  code:string;
  constructor(username,email,password) {
    this.username=username;
    this.email=email;
    this.password=password;
    this.code='UDEMYANDROID'
  }
}
