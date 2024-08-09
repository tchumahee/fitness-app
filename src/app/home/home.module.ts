import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NewsFeedComponent } from './home/news-feed/news-feed.component';
import { ExercisesFeedComponent } from './home/exercises-feed/exercises-feed.component';
import { ArticleCardComponent } from './home/article-card/article-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewsFeedComponent,
    ExercisesFeedComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
