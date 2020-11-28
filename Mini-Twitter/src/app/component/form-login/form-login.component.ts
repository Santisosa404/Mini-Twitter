import { Component, OnInit } from '@angular/core';
import {LoginDto} from '../../dto/login.dto';
import {ValidacionService} from '../../services/validacion.service';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  usuario:LoginDto;
  constructor(private validacionService:ValidacionService,private route: ActivatedRoute, private router: Router) {
    this.usuario= new LoginDto("","");
   }

  ngOnInit(): void {
  }
  realizarLogin(){
    this.validacionService.login(this.usuario).subscribe(resp =>{
      console.log('Token = '+resp.token);
      localStorage.setItem('token',resp.token);
      this.router.navigate(["/allTweet"]);
    });
  }
}
