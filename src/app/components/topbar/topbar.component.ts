import { Component, Input, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {


  animalLike=this.service.animalArray
  openLike=false
  emplyHeart:string="../../assets/heart.svg"
  fullHeart:string="../../assets/heart-red.svg"

  constructor(public service:LocalService) { }

  OpenLike(){
    this.openLike=true
    console.log(this.animalLike)
  }

  ngOnInit(): void {
  }

}
