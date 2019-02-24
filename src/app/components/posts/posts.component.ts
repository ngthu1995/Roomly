import { Component } from "@angular/core";
import { MatDialog } from '@angular/material';
import { DonationComponent } from '../donation/donation.component';
import { Router } from '@angular/router';
import { DonationOptionsComponent } from '../donation-options/donation-options.component';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})
export class PostsComponent {

    constructor(private matDialog: MatDialog,
        private router: Router,
        private toastr: ToastrService) { }

    openPost() {
        this.matDialog.open(DonationComponent, {
            width: '700px',
            height: '700px'
        })
            .afterClosed().subscribe(res => {
                if (res) {
                    this.router.navigate(['manage'])
                }
            })
    }

    openDonate() {
        this.matDialog.open(DonationOptionsComponent, {
            width: '500px',
            height: '500px'
        })
            .afterClosed().subscribe(res => {
                if (res) {
                    this.toastr.success('Success', 'Thanks For Donating Money')
                }
            })
    }

}