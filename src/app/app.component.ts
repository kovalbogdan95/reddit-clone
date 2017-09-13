import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Add article ${title.value} and ${link.value}`);
        return false;
    }

}
