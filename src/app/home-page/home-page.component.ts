import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private titleService: Title) { 
    config.interval = 6000;
    config.wrap = true;
    config.keyboard = false;  
    config.pauseOnHover = true; 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {}

}
