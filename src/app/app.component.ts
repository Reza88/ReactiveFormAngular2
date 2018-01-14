import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm : FormGroup;
  ngOnInit(){
    this.loginForm = new FormGroup({
        'username':new FormControl(null,
          [Validators.required,
            Validators.minLength(5),
            Validators.maxLength(15),
            Validators.pattern('^[a-zA-Z ]+$')]),
        'age': new FormControl(null,
          [Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.min(18),
            Validators.max(118)]),

        'passwordData': new FormGroup({
          'password':new FormControl('',Validators.required),
          'confirm': new FormControl('',Validators.required)
        },this.passwordMatchValidator)
    });
  }

  passwordMatchValidator(g:FormGroup):{[key:string]:boolean}{
    return g.get('password').value === g.get('confirm').value ? null :{'mismatch':true}
  }

  onSubmit(){
    this.loginForm.reset();
  }
  onReset(){
    this.loginForm.reset();
  }

}
