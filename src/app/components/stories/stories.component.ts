import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonationOptionsComponent } from '../donation-options/donation-options.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private matDialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit() {
  }

  openDonate() {
    const ref = this.matDialog.open(DonationOptionsComponent, {
      width: '800px',
      height: '396px'
    })
  }
  isAuthenticated() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    return false;
  }
}
