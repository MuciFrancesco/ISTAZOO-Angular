import { Component, OnInit } from '@angular/core';
import { AnimalInterface } from 'src/app/interfaces/animal.interfaces';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[LocalService]
})
export class HomeComponent implements OnInit {

  animal$=this.service.getApiAnimal()
  constructor( private service:LocalService) {}

  ngOnInit(): void {
  }



}
