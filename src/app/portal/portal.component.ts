import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  studies: Array<string> = [];	

  constructor() { }

  ngOnInit() {
  	this.studies.push("PHBP");
  	this.studies.push("EMA_JIT");
  	this.studies.push("Yount - COPD");
  	this.studies.push("Redcap_Intervention");
  }

}
