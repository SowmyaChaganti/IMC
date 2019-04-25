import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  subject: string = 'IMC Communications';
  emailBody: string = '<h1>Welcome to WGU Hackathon 2019!!</h1>';

  constructor() { }

  ngOnInit() {
  }

}
