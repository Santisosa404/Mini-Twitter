import { Component, OnInit } from '@angular/core';
import {LoginDto} from '../../dto/login.dto';
import {ValidacionService} from '../../services/validacion.service';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  usuario:LoginDto;
  constructor(private validacionService:ValidacionService) {
    this.usuario= new LoginDto("","");
   }

  ngOnInit(): void {
  }
  realizarLogin(){
    this.validacionService.login(this.usuario).subscribe(resp =>{
      console.log('Token = '+resp.token);
      localStorage.setItem('token',resp.token);
    });
  }
}
