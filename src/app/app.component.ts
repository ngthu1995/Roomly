import { Component } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hackathon-Projec';
  public query: string;

  public constructor() {
    this.query = "starbucks";
  }

  public ngOnInit() { }
}
