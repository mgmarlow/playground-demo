import { IUser } from '../user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-info-summary',
    template: `
        <div>
            {{ user.username }}
            {{ user.email }}
        </div>
        <button class="btn btn-primary" (click)="edit = !edit" *ngIf="user.editable">Edit</button>
        <div *ngIf="edit">
            <app-details-form [user]="user"></app-details-form>
        </div>
    `,
    styles: []
})
export class InfoSummaryComponent implements OnInit {
    @Input() user: IUser;
    edit = false;

    constructor() { }

    ngOnInit() {
    }

}
