import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonationOptionsComponent } from '../../donation-options/donation-options.component';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 4, delay: 2 }
    }))])
  ]
})
export class BannerComponent implements OnInit {

  fadeIn: any;

  constructor(private matDialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openDonation() {
    const ref = this.matDialog.open(DonationOptionsComponent, {
      width: '500px',
      height: '500px'
    })
  }

}
