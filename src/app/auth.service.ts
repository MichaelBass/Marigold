import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RedcapService } from './redcap.service';
import { Participant } from './participant';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private redcapService: RedcapService) {} 

    login(study:string, email:string, password:string):Observable<Participant[]> {
        return this.redcapService.loginParticipant(study, email, password).map(
          data =>{
            return data;
          }
        );
    }

}
