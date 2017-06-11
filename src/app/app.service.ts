import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class AppService {

  constructor(public http: Http) { }

  getPackets(item: string) {
    console.log('packets ', item);

    let urlParams = new URLSearchParams();
    urlParams.set('packets', item);

    let Obs = new Observable(observer => {
      this.http.get('/api', { search: urlParams })
        .subscribe(
          (data) => { 
            console.log('data ', data);
            observer.next(data.json()); 
          },
          err => observer.error(err)
        ).add(() => {
          observer.complete();
        });
    });

    return Obs;
      
  }

}