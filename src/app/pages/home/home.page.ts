import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  simCards: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.get();
  }

  async get() {
    this.simCards = await this.contentfulService.getSimCards();
  }

}
