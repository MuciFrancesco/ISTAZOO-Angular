import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimalInterface } from '../interfaces/animal.interfaces';


@Injectable({
  providedIn: 'root'
})
export class LocalService {

  animalArray:any=[]
  singleAnimal:Object={}
  openDetails: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(public http:HttpClient) { }

  getApiAnimal(){  //OBSARVABLE e una tipologia di oggetto che fa la chimata e attende una risposta...async()
    let url=`https://zoo-animal-api.herokuapp.com/animals/rand/${8}`
    return  this.http.get(url)
  }

  openDetail(i:AnimalInterface){
    this.singleAnimal=i
    this.openDetails.next(true)

  }
  closeDetails(){
    this.openDetails.next(false)
  }

  addLike (idx:any){
    if (!this.animalArray.some((item:any) => item.name == idx.name)) {
      this.animalArray.push(idx)
      console.log(this.animalArray)
      return this.animalArray
    }else{
      //@ts-ignore
      this.animalArray.splice(this.animalArray.findIndex(a => a.id === idx.id) , 1)
      console.log(this.animalArray)
      return this.animalArray
    }
  }
  deleteLike(idx:any){
    //@ts-ignore
    this.animalArray.splice(this.animalArray.findIndex(a => a.id === idx.id) , 1)
      console.log(this.animalArray)
      return this.animalArray
  }

  someArray(id:any):Observable<boolean>{
    let sommedArray= this.animalArray.some((item:any) => item.id === id.id);
    return sommedArray
  }

}
