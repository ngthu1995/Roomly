import { Component, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn, slideInLeft, slideInRight, fadeInRight, fadeInLeft} from 'ng-animate';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  animations: [
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 4, delay: 4}
    }))]),
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 3, delay: 1 }
    }))]),
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 3, delay: 1 }
    }))]),
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 3, delay: 4 }
    }))]),
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 3, delay: 5 }
    }))]),
  ], 
})
export class LandingComponent implements OnInit {
  public query: string;

  constructor() {
    this.query = "starbucks";
  }

  ngOnInit() {}
}
