import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';



@Component({
    selector: 'app-userlist',
    templateUrl: './userList.component.html',
    styleUrls: ['./userList.component.css']
})
export class UserlistComponent implements OnInit {
    users = [];
    
    constructor(private authService: AuthService){}

    ngOnInit() {
        this.authService.apptsObservable.subscribe((user => this.users = user));
        this.authService.getUsers();
    } 
}