import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AnimalInterface } from 'src/app/interfaces/animal.interfaces';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-serchbar',
  templateUrl: './serchbar.component.html',
  styleUrls: ['./serchbar.component.scss']
})
export class SerchbarComponent implements OnInit {

  searchForm:FormGroup=new FormGroup({
    search:new FormControl('')
  })
  animals=this.service.getApiAnimal().subscribe((el:any)=>{this.animalss=[...el,this.animalss];this.animalss.pop()})
  animalss:any=[]
  animalSerchList:any=[]
  filteredSearch:string="";

  constructor(public service:LocalService) {
    this.searchForm.get("search")?.valueChanges.pipe(
      distinctUntilChanged()
      ).subscribe((v)=>{
        this.animalSerchList= this.animalss.filter((value:any)=>{
          return value.name.toLowerCase().includes(v.toLowerCase())
        })
      return this.animalSerchList;
    })
  }

  ngOnInit(): void {
  }

  closeSearchBar(){
    this.searchForm.value.search=""
    this.filteredSearch=""
    this.animalSerchList=[]
  }

}
