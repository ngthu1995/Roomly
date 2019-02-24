import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-donation-options',
  templateUrl: './donation-options.component.html',
  styleUrls: ['./donation-options.component.scss']
})
export class DonationOptionsComponent implements OnInit {

  constructor(
    private auth: AuthService) { }

  ngOnInit() {
  }


}
