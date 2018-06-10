import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RedcapService } from '../redcap.service';
import { Protocol } from '../protocol';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


	protocol: Protocol[] = new Array();
	study: string;

	constructor(private redcapService: RedcapService, private route: ActivatedRoute) { }

	ngOnInit() {

	    this.route.params.subscribe(params => {
	      this.study = params['id'];
	    });

		this.redcapService.getProtocol(this.study).subscribe(
			data => {
			this.protocol = data;
			}
		);
	}
}