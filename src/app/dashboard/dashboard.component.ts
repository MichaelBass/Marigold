import { Component, OnInit, Inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Participant } from '../participant';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.state';
import * as ParticipantsActions from '../participant.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	study: string;
  participant: Participant;

	constructor(@Inject(AppStore) private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {


	this.participant = this.store.getState().participant;

    this.route.params.subscribe(params => {
      this.study = params['id'];
    });


  }

}
