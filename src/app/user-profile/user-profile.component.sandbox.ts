import { IUser } from './user';
import { UserService } from './user.service';
import { DetailsFormComponent } from './details-form/details-form.component';
import { InfoSummaryComponent } from './info-summary/info-summary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { sandboxOf } from 'angular-playground/dist';
import { UserProfileComponent } from './user-profile.component';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

class MockUserService {
    getUser(id: number): Observable<IUser> {
        return Observable.of({
            username: 'waluigi',
            email: 'waluigi@tennischamp.com',
            twitter: '@waluigi',
            bio: 'WAAAAAAAAALUIGI',
            editable: true
        });
    }
}

export default sandboxOf(UserProfileComponent, {
    imports: [ ReactiveFormsModule ],
    declarations: [
        InfoSummaryComponent,
        DetailsFormComponent
    ],
    providers: [
        { provide: UserService, useClass: MockUserService }
    ]
})
    .add('Default', {
        template: `
            <app-user-profile></app-user-profile>
        `
    });
