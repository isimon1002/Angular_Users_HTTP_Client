import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.css']
})
export class IndividualUserComponent implements OnInit {
  users;
  user;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.users = this.data.users;
    this.user = this.users[this.data.index]
    console.log(this.user)
  }



}
