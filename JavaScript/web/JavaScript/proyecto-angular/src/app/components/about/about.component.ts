import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public title: string;
	public subtitle: string;
	public email: string;

	constructor() { 
		this.title = "Diego García-Viana";
		this.subtitle = "Ingeniero de software en Taiger SL";
		this.email = "diego.garcia.viana@taiger.com";
	}

	ngOnInit() {
	}

}
