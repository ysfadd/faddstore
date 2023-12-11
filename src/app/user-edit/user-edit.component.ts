import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user!: User;
id:any;
  ex: any;
  exService: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];})
    this.getUser();
  }

  getUser(): void {
  
      
    
    const id1: string | null=this.route.snapshot.paramMap.get('id1');
    this.userService.getUser(this.id)
      .subscribe(user => this.user = user);
  }

  updateUser(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => {
        // Handle success and navigation, if needed
      });
  }
}