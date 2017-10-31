import { IUser } from '../user';
import { ReactiveFormsModule } from '@angular/forms';
import { sandboxOf } from 'angular-playground/dist';
import { DetailsFormComponent } from './details-form.component';

export default sandboxOf(DetailsFormComponent, {
    imports: [ ReactiveFormsModule ]
})
    .add('Default', {
        template: `<app-details-form></app-details-form>`
    })
    .add('User Loaded', {
        template: `<app-details-form [user]="user"></app-details-form>`,
        context: {
            user: {
                username: 'mario',
                email: 'mario@mushroom.kingdom',
                twitter: '@mario',
                bio: 'I jump on goombas.'
            } as IUser
        }
    })
