import { Component } from "@angular/core";
import { MatDialog } from '@angular/material';
import { DonationComponent } from '../donation/donation.component';


@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {

    constructor(private matDialog: MatDialog) { }

    // openPost() {
    //     this.matDialog.open(DonationComponent, {
    //         width: '700px',
    //         height: '700px'
    //     })
    // }

}