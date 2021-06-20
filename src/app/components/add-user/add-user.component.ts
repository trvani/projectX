import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = {
    FirstName:'',
    LastName: '',
    Email:'',
    Phone:'',
  }

  @ViewChild('userForm') form:any;
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit({value}:{value:User})
  {
    console.log(value);
  }

}
