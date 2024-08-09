import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {

  @Input() public text: string = "test";

  constructor () {}
}
