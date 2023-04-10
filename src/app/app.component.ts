import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { UsersService } from './service/users.service';
// import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService],
})
export class AppComponent {
  users: any[];

  constructor(public usersService: UsersService) {
    this.users = this.usersService.getUsers();
  };
  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<PopUpComponent>;

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.name = this.usersService.group;
    this.componentRef.instance.members = this.users.length;

    this.componentRef.instance.close.subscribe(() => { this.viewRef.clear() });
  };

};