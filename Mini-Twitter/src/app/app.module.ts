import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValidacionService } from './services/validacion.service';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
//import { SignupService } from './services/signup.service';
import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import { FormRegistroComponent } from './component/form-registro/form-registro.component';
@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [ValidacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
