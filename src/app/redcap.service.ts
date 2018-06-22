import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Protocol } from './protocol';
import { Event } from './event';
import { Arm } from './arm';
import { Participant } from './participant';
import { FormMapping } from './formmapping';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/shareReplay';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Accept':'application/json' })
};

@Injectable()
export class RedcapService {

  constructor(private http: HttpClient) { }

	private redcapUrl = 'https://mss.fsm.northwestern.edu/Intervention';  // URL to web api
  	
  	getProtocol(study: string) {
  		return this.http.get<Protocol[]>(this.redcapUrl + '/Protocol/' + study);
  	}

  	getEvents(study: string) {
  		return this.http.get<Event[]>(this.redcapUrl + '/Events/' + study);
  	}

    getArms(study: string) {
      return this.http.get<Arm[]>(this.redcapUrl + '/Arms/' + study);
    }

    getFormMapping(study: string) {
      return this.http.get<FormMapping[]>(this.redcapUrl + '/InstrumentEvents/' + study);
    }

    loginParticipant(study: string, user_id: string, password: string): Observable<Participant[]> {
      var data = "user_id=" + user_id + "&password=" +  password;
      return this.http.post<Participant[]>(this.redcapUrl + '/Login/' + study, data, httpOptions).shareReplay();
      //return this.http.get<Participant[]>(this.redcapUrl + '/Login/' + study + "?" + data);
    }

    registerParticipant(study: string, participant: Participant): Observable<any> {

      var data = "record_id=" + participant.record_id + "&user_id=" +  participant.user_id + "&email=" + participant.email + "&password=" +  participant.password + "&study_arm=" +  participant.study_arm;
      return this.http.post<any>(this.redcapUrl + '/Registration/' + study, data, httpOptions).shareReplay();

    }

}
 