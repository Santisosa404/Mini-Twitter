import { Component, OnInit } from '@angular/core';
import { RegistroDto } from '../../dto/registro.dto';
import {ValidacionService} from '../../services/validacion.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent implements OnInit {

  usuario:RegistroDto;
  constructor(private validacionService:ValidacionService) { }

  ngOnInit(): void {
    this.usuario = new RegistroDto("","","");
  }
  realizarRegistro(){
    this.validacionService.registro(this.usuario).subscribe(resp => {
      console.log(this.usuario);

    });
  }


}
