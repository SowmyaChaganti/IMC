import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'imc-faq',
  templateUrl: './imc-faq.component.html',
  styleUrls: ['./imc-faq.component.scss']
})
export class ImcFaqComponent implements OnInit {

  public faqs = [
    {question: 'question 1', answer: 'answer 1'},
    {question: 'question 2', answer: 'answer 2'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
