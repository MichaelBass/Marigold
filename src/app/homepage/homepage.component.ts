import { Component, OnInit, Inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RedcapService } from '../redcap.service';
import { Protocol } from '../protocol';
import { FormMapping } from '../formmapping';
import { Participant } from '../participant';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.state';
import * as ParticipantsActions from '../participant.actions';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


	protocol: FormMapping[] = new Array();
	@Input() study: string;
	participant: Participant;
	events: string[] = new Array();
	eventForms: any[] = new Array();

	constructor(@Inject(AppStore) private store: Store<AppState>, private redcapService: RedcapService, private route: ActivatedRoute) { }

	ngOnInit() {
		
		this.participant = this.store.getState().participant;

		//console.log(this.participant.enrollment_date + ":" + this.participant.study_arm);
	    this.route.params.subscribe(params => {
	      this.study = params['id'];
	    });

	    /*
	    this.route.params.subscribe(params => {
	      this.arm = params['arm'];
	    });
	    */

		this.redcapService.getFormMapping(this.study).subscribe(
			data => {
				this.protocol = data.filter((a) => a.arm_num == this.participant.study_arm);
				this.parseEvent();
				this.parseForms();
			}
		);

	}

	parseEvent() {
		var myEvents =[];
		this.protocol.forEach(function(formMap) {
			if( myEvents.indexOf(formMap.unique_event_name) == -1 ){
				myEvents.push(formMap.unique_event_name);
			}
		});

		this.events = myEvents;	
	}

	parseForms() {
		
		var myForms =[];
		var myProtocol = this.protocol; // can not access class variable in forEach statement

		this.events.forEach(function(event) {
			var myEventForms =[];
			myProtocol.forEach(function(formMap) {
				if( formMap.unique_event_name == event ){
					myEventForms.push(formMap);
				}
			});

			var _event = {"name":"" + event + "":"forms":myEventForms};
			myForms.push(_event);
		}
		);	
		
		this.eventForms = myForms;	
	}

}