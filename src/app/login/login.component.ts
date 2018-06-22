
import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService} from '../auth.service';
import { Router} from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import { Participant } from '../participant';

import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.state';
import * as ParticipantsActions from '../participant.actions';


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

    constructor(@Inject(AppStore) private store: Store<AppState>,
      private fb:FormBuilder, 
      private authService: AuthService, 
      private router: Router,
      private route: ActivatedRoute) {}

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
      this.store.dispatch(ParticipantsActions.clear_state());
      if (val.email && val.password) {
          this.authService.login(this.study, val.email, val.password).subscribe(
            data =>{
              this.store.dispatch(ParticipantsActions.create_participant(data[0]));
              this.router.navigateByUrl('/dashboard/' + this.study);
            }

          );
      }
    }

}

