import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:string;
  user?: User ={
    FirstName:'',
    LastName:'',
    Email:'',
    Phone:''
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService ){ }

  ngOnInit(): void {
    //Get id from url
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(user => this.user = user);

  }

  onSubmit({value}:{value:User}){
    // Add id to user
    value.id = this.id;
    // Update user
    this.userService.updateUser(value);

    //Message
    this.flashMessage.show('User Updated!',{
      cssClass: 'alert-success',timeout:4000
    });
    this.router.navigate(['/users/'+this.id]);

  }

}
