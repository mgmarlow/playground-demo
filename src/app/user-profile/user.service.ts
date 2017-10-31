import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable()
export class UserService {
    getUser(id: number): Observable<IUser> {
        return Observable.of({
            username: 'waluigi',
            email: 'waluigi@tennischamp.com',
            twitter: '@waluigi',
            bio: 'WAAAAAAAAALUIGI',
            editable: false
        });
    }
}