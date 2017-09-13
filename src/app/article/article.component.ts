import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
      class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  votes: number;
  title: string;
  link: string;


  constructor() {
      this.title = 'Andgular 4';
      this.link = 'http://angular.io';
      this.votes = 10;
  }

  voteUp() {
      this.votes += 1;
      return false;
  }

  voteDown() {
      this.votes -= 1;
      return false;
  }

  ngOnInit() {
  }

}
