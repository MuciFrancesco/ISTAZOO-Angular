import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalInterface } from '../../interfaces/animal.interfaces';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  singleAnimal:any=this.service.singleAnimal
  openDetails=this.service.openDetails

  emplyHeart:string="../../assets/heart.svg"
  fullHeart:string="../../assets/heart-red.svg"

  constructor(private service:LocalService) {

  }
  closeDetails(){
    this.service.closeDetails()
  }


  addLikes(idx:any){
    this.service.addLike(idx)
  }

  someArray(id:any):Observable<boolean>{
   return  this.service.someArray(id)
  }

  ngOnInit(): void {}

}
