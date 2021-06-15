import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] | undefined;
  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => console.log(users));
  }

}
