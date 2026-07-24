import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from "@angular/router";
import { Util } from '../../utilities/util';
import { UrlModel } from '../../utilities/utilities';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  router=inject(Router);
  util=inject(Util)
  formbuilder=inject(FormBuilder);
  loginform:FormGroup|undefined;
  constructor(){

  }
  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginform=this.formbuilder.group({
      UserName:new FormControl(''),
      Password:new FormControl('')
    })
  }
  login(){
     this.util.postdata(UrlModel.account.login,this.loginform!.value).subscribe((res:any)=>{
      if(res.userType){
        sessionStorage.setItem('currentUser',JSON.stringify(res));
      if(res.userType=='Vendor'){this.router.navigateByUrl('vendor')}
      // if(res.userType=='Vendor'){this.router.navigateByUrl('vendor')}
      // if(res.userType=='Vendor'){this.router.navigateByUrl('vendor')}
      }
    })
  }
}
