import { ReactiveFormsModule } from '@angular/forms';
import { DetailsFormComponent } from '../details-form/details-form.component';
import { IUser } from '../user';
import { InfoSummaryComponent } from './info-summary.component';
import { sandboxOf } from 'angular-playground/dist';

export default sandboxOf(InfoSummaryComponent, {
    imports: [ ReactiveFormsModule ],
    declarations: [ DetailsFormComponent ]
})
    .add('Default', {
        template: `
            <app-info-summary [user]="user"></app-info-summary>
        `,
        // Provide sample input data
        context: {
            user: {
                username: 'mario',
                email: 'mario@mushroom.kingdom',
                twitter: '@mario',
                bio: 'I jump on goombas.',
                editable: true
            } as IUser
        }
    })
    .add('Non-editable User', {
        template: `
            <app-info-summary [user]="user"></app-info-summary>
        `,
        context: {
            user: {
                username: 'waluigi',
                email: 'waluigi@tennischamp.com',
                twitter: '@waluigi',
                bio: 'WAAAAAAAALUIGI',
                editable: false
            } as IUser
        }
    });