import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { AppService } from 'app/app.service';

@Component({
  selector: 'app-main',
  providers: [AppService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  form: FormGroup;

  data: any;
  error: any;

  loading: boolean;

  constructor(private service: AppService) { }

  ngOnInit() { 
    this.form = new FormGroup({
      items: new FormControl('', [Validators.pattern(/^([1-9]*)$/)])
    });

  }

  getPackets() {
    if (this.form.invalid) { return; }

    this.loading = true;
    this.service.getPackets(this.form.value.items)
      .subscribe((data:any) => {

        //console.log('data', data);
        if (data && data.verify === true) {
          this.data = data;
          this.error = null;
          this.form.setValue({items: data.in})
        } else {
          this.data = null;
          this.error = {
            err: 'La chaine suivante n\'a pas pu être traitée ' + data.in,
            message: `La chaine suivante n\'est pas correcte : ${data.in}` 
          };          
        }

      }, (err) => { 

        this.data = null;
        this.error = {
          err: err,
          message: 'Une erreur est survenue, veuillez réessayer.'
        };

      }, () => this.loading = false);

  }

}
