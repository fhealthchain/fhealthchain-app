import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {from, Observable } from 'rxjs';

@Injectable()
export class NavigationService {

  constructor(
    protected router: Router
  ) { }

  public navigationToUrlAsync(url: string): Observable<any> {
    return from(this.router.navigate([url]));
  }
}
