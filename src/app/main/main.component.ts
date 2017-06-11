import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-main',
  providers: [AppService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Angular Optim Packets';
  data: any;
  error: any;
  itemValue: string;
  loading: boolean;

  constructor(public service: AppService) { }

  ngOnInit() { }

  getPackets() {
    this.loading = true;
    this.service.getPackets(this.itemValue)
      .subscribe((data:any) => {
        //console.log('data', data);
        if (data && data.verify === true) {
          this.data = data;
          this.itemValue = data.in;
          this.error = null;
        } else {
          this.data = null;
          this.error = {
            err: 'La chaine suivante n\'a pas pu être traitée ' + data.in,
            message: `La chaine suivante n\'est pas correcte : ${data.in}` 
          };          
        }
        this.loading = false;
      }, (err) => { 
        this.error = {
          err: err,
          message: 'Une erreur est survenue, veuillez réessayer.'
        };
        this.data = null;
        this.loading = false;
      } 
    );
  }


}
