import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { RedcapService} from '../redcap.service';
import { Router} from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import { Participant } from '../participant';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

   form:FormGroup;
   study: string;
   participant: Participant;

    constructor(private fb:FormBuilder, 
       private redcapService: RedcapService, 
       private router: Router,
       private route: ActivatedRoute) {
    }

  	ngOnInit() {

      this.route.params.subscribe(params => {
        this.study = params['id'];
      });

      let group: any = {};
      group['record_id'] = new FormControl('record_id', Validators.required);
      group['redcap_event_name'] = new FormControl('redcap_event_name', Validators.required);
      group['user_id'] = new FormControl('user_id', Validators.required);
      group['email'] = new FormControl('email', Validators.required);
      group['password'] = new FormControl('password', Validators.required);
	    group['enrollment_date'] = new FormControl('enrollment_date', Validators.required);
	    group['study_arm'] = new FormControl('study_arm', Validators.required);
	    group['registration_complete'] = new FormControl('registration_complete', Validators.required);

      this.form = new FormGroup(group);
    }

    registerParticipant() {

      this.participant = this.form.value;

      this.redcapService.registerParticipant(this.study, this.participant).subscribe(
        data =>{
          console.log(data);
          //this.router.navigateByUrl('/');
        }
      );
      
    }    

}
