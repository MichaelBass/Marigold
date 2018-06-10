import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RedcapService } from '../redcap.service';
import { Event } from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


	events: Event[] = new Array();
	study: string;

  	constructor(private redcapService: RedcapService, private route: ActivatedRoute) { }

	ngOnInit() {

	    this.route.params.subscribe(params => {
	      this.study = params['id'];
	    });

		this.redcapService.getEvents(this.study).subscribe(
			data => {
			this.events = data;
			}
		);
	}

}
