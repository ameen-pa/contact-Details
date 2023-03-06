import { Component, OnInit } from '@angular/core';
import { ApiSevicesService } from '../services/api-sevices.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  allContacts:any
  searchContact:string = ''

  constructor(private api:ApiSevicesService){

  }
  ngOnInit(): void {
this.api.allContacts()
.subscribe((result:any)=>{
  this.allContacts = result.users
  console.log(this.allContacts);
  
})

      }

}
