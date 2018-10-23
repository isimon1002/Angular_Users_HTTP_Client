import { Component, OnInit, AfterContentInit, AfterViewInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getUsers().subscribe((recipes) => {
      console.log(recipes)
      this.users = recipes;
      console.log(this.data.users)
    })
  }

  get(i){
    this.data.getIndex(i)
    console.log(this.data.index);
  }

}
