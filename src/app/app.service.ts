import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(public http: Http) { }

  getPackets(item: string) {
    //console.log('packets ', item);

    let urlParams = new URLSearchParams();
    urlParams.set('packets', item);

    return this.http.get('/api', { search: urlParams })
              .map(res => res.json());

  }

}