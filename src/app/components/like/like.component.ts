import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
 @Input() openLike:any
 @Output() openLikeChange: EventEmitter<any> = new EventEmitter<any>();

  animalLike=this.service.animalArray
  constructor(private service:LocalService) {}

  closeLike(){
    this.openLikeChange.emit(false)
  }
  deleteLike(idx:any){
    this.service.deleteLike(idx)
  }

  ngOnInit(): void {
  }

}
