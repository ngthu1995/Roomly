import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonateOptionsComponent } from '../../donate-options/donate-options.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  openDonation() {
    const dialogRef = this.matDialog.open(DonateOptionsComponent, {
      width: '500px',
      height: '500px'
    })
  }

}
