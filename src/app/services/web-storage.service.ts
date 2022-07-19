import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Web3Storage} from 'web3.storage';

@Injectable()
export class WebStorageService {

  private client: any;

  constructor() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERCRUYyNTFkODk4RTk3NUY2NDE4MTYxRTZFQ2VDM2VCRDZDNmUwNGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTc1Mzc1OTk2OTQsIm5hbWUiOiJ0ZXN0In0.0kKfHuHaj4W7EM1EzK3sptg8CE6l8EXDxWaPRflRVG4';
    this.client = new Web3Storage({token: token, endpoint: new URL('https://api.web3.storage')});
  }

  public uploadFileAsync(file: any): Observable<any> {
    return from(this.client.put(file));
  }

  public retrieveFileByCidAsync(cid: string): Observable<any> {
    return from(this.client.get(cid));
  }
}
