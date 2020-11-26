export class LoginDto{
  email:string
  password:string
  constructor(email,password:string) {
    this.email=email;
    this.password=password;
  }
}
