import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;


  constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    }
    )

  }

  public validateUser(){
    console.log('pl');

    this.loginService?.checkUserConnexion(this.form.controls['mail'].value,this.form.controls['password'].value).subscribe()
  }
}
