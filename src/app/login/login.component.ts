
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService} from '../auth.service';
import { Router} from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import { Participant } from '../participant';

//https://www.toptal.com/angular-js/angular-4-forms-validation
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  //https://blog.angular-university.io/angular-jwt-authentication/

    form:FormGroup;
    study: string;

    email: string;
    password: string;

    constructor(private fb:FormBuilder, 
                 private authService: AuthService, 
                 private router: Router,
                 private route: ActivatedRoute) {

    }

  	ngOnInit() {

      this.route.params.subscribe(params => {
        this.study = params['id'];
      });

      let group: any = {};
      group['email'] = new FormControl('email', Validators.required);
      group['password'] = new FormControl('password', Validators.required);
      this.form = new FormGroup(group);
    }


    login() {
        const val = this.form.value;

        if (val.email && val.password) {

            this.authService.login(this.study, val.email, val.password).subscribe(
              data =>{
                console.log(data);
                //this.router.navigateByUrl('/');
              }

            );

        }
    }

}

