import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonationOptionsComponent } from '../../donation-options/donation-options.component';


@Component({
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.css']
})


export class StoryComponent {
    constructor(private matDialog: MatDialog) { }


    openDonate() {
        this.matDialog.open(DonationOptionsComponent, {
            width: '850px',
            height: '500px'
        })
    }
}