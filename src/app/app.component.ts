import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalInterface } from './interfaces/animal.interfaces';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';

  constructor(public router:Router) { //per richiamare il service in modo più pulito si fa cosi
  }

  ngOnInit(): void {
    console.log(this.router)
  }

}
