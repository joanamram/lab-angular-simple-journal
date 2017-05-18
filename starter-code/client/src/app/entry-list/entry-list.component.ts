import { Component, OnInit } from '@angular/core';
import { EntryListService } from '../entry-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntryListService]
})

export class EntryListComponent implements OnInit {

  items;


  constructor(private listService : EntryListService) { }

  listTest(){
    console.log("funciona");
  }

  ngOnInit() {
  }

  listAll(){
    this.listService.getList().subscribe(response =>{
      this.items = response;
      console.log(response)
    })
  }




}
