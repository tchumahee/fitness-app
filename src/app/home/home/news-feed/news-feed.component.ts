import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.css'
})
export class NewsFeedComponent {

  public text: string = "test";

  constructor() { }
}
