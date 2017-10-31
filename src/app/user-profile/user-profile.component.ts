import { IUser } from './user';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    template: `
        <h3>Profile</h3>
        <app-info-summary [user]="user"></app-info-summary>
    `,
    styles: []
})
export class UserProfileComponent implements OnInit {
    user: IUser;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUser(10)
            .subscribe(user => this.user = user);
    }

}
