import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonationOptionsComponent } from '../../donation-options/donation-options.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

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
