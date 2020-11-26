import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { LoginResponse } from '../interfaces/login-response.interface';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RegistroDto} from '../dto/registro.dto';
import {RegistroResponse} from '../interfaces/registro-response.interface';

const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/login';
const SIGNUP_URL = 'https://www.minitwitter.com:3001/apiv1/auth/signup';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor(private http:HttpClient) { }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      LOGIN_URL,
      loginDto,
      httpOptions
    );
  }
  registro(registroDto:RegistroDto): Observable<RegistroResponse> {
    return this.http.post<RegistroResponse>(
      SIGNUP_URL,
      registroDto,
      httpOptions
    );
  }


}
