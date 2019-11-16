import { Component, OnInit } from '@angular/core';
import { FaqService } from './faq.service';
import { Faq } from './faq.model';

@Component({
  selector: 'app-donate-page',
  templateUrl: './donate-page.component.html',
  styleUrls: ['./donate-page.component.scss'],
  providers: [FaqService]
})
export class DonatePageComponent implements OnInit {
  selectedFaq: Faq;

  constructor() { }

  ngOnInit() {
  }

}
