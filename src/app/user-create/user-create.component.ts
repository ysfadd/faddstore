import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  newUser: User = {
    id: 0,
    name: '',
    email: ''
  };

  constructor(private userService: UserService) { }

  createUser(): void {
    this.userService.createUser(this.newUser)
      .subscribe(() => {
        // Handle success and navigation, if needed
      });
  }
}