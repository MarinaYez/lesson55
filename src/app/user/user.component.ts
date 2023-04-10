import { Component, Input } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UsersService]
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  constructor(public usersService: UsersService) { }
  
  changeName(value: string) {
    this.name = value;
    
  }
  changeStatus(value: any) {
    console.log(value);
    
    
  }
}
