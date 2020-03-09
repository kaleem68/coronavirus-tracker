import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { CoronaVirusDataService } from './CoronaVirusDataService';
import {LocationStats} from '../data/LocationStats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userClickedLinked = false;

  locationStats:LocationStats[] = [];
  constructor(private coronaVirusDataService : CoronaVirusDataService)  {
  }

  showCoronaUpdate(){

    this.coronaVirusDataService.getCoronaUpdate()
      .subscribe((data:LocationStats[])=>{
        this.locationStats = data;
        this.userClickedLinked = true;
      }
      );
    }

    }

