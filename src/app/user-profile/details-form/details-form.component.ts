import { IUser } from '../user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-form',
  template: `
    <form class="form" [formGroup]="detailsForm" (ngSubmit)="submitForm(detailsForm.value)">
      <div class="form-group">
        <label>Username:</label>
        <input class="form-control" type="text" formControlName="username" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input class="form-control" type="text" formControlName="email" />
      </div>
      <div class="form-group">
        <label>Twitter:</label>
        <input class="form-control" type="text" formControlName="twitter" />
      </div>
      <div class="form-group">
        <label>Bio:</label>
        <textarea class="form-control" formControlName="bio"></textarea>
      </div>
      <button class="btn btn-default" type="submit">Submit</button>
    </form>
  `,
  styles: []
})
export class DetailsFormComponent implements OnInit {
  @Input() user: IUser;
  detailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.detailsForm = this.fb.group({
      username: '',
      email: '',
      twitter: '',
      bio: ''
    });

    if (this.user) {
      this.detailsForm.patchValue(this.user);
    }
  }

  submitForm(formValue) {
    console.log(formValue);
  }

}
