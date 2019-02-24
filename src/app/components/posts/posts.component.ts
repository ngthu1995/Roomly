import { Component } from "@angular/core";
import { MatDialog } from '@angular/material';
import { DonationComponent } from '../donation/donation.component';
import { Router } from '@angular/router';


@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {

    constructor(private matDialog: MatDialog,
        private router: Router) { }

    openPost() {
        this.matDialog.open(DonationComponent, {
            width: '700px',
            height: '700px'
        })
            .afterClosed().subscribe(_ => {
                this.router.navigate(['manage'])
            })
    }

}