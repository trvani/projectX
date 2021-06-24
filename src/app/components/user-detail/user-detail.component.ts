import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../../services/user.service';

import { User } from '../../models/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: string;
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) {

   }

  ngOnInit(): void {
    //get id from url
    this.id = this.route.snapshot.params['id'];
    //get client
    this.userService.getUser(this.id).subscribe(usr => {
      this.user = usr;
    });
  }

}
