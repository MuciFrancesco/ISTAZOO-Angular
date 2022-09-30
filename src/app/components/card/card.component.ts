import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimalInterface } from '../../interfaces/animal.interfaces';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() animal:AnimalInterface | undefined | any

  singleAnimal:Object=this.service.singleAnimal
  openDetails=this.service.openDetails

  constructor(private service:LocalService) {  //per richiamare il service in modo più pulito si fa cosi
  }


  openDetail(i:AnimalInterface){
    this.service.openDetail(i)

  }



  ngOnInit(): void { //ngOnInit tutto quello che ce al suo interno viene caricato al caricamento completo del componente

  }



}
