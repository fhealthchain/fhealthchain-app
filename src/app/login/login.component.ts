import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  validateForm!: FormGroup;

  private _subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    protected navigationService: NavigationService) {
    this._subscription = new Subscription();
  }

  public ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }


  public submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const navigateToPageSubscription = this.navigationService.navigationToUrlAsync('/clinic').subscribe();
      this._subscription.add(navigateToPageSubscription);
      return;
    }

    Object.values(this.validateForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({onlySelf: true});
      }
    });
  }

  public ngOnDestroy(): void {
    if (this._subscription && !this._subscription.closed) {
      this._subscription.unsubscribe();
    }
  }

}
