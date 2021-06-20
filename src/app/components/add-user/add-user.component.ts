import { ThisReceiver, viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/users';
import { FlashMessagesService } from 'angular2-flash-messages';
import{UserService} from '../../services/user.service';
import{Router} from '@angular/router';

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
  constructor(private flashMessage: FlashMessagesService,
    private userService: UserService,
    private router:Router
    
    ) { }

  ngOnInit(): void {

  }

  onSubmit({value}:{value:User})
  {
     //Add New User
      this.userService.newUser(value)
      // Show Message
      this.flashMessage.show('New user added',{cssClass:'alert-success',timeout:2000});
      // Redirect to dashboard  
      this.router.navigate(['/']);
  }

}
