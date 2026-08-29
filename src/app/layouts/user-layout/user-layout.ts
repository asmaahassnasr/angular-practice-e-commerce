import { Component } from '@angular/core';
import { UserFooter } from '../../components/user-footer/user-footer';
import { UserNav } from '../../components/user-nav/user-nav';
import { Home } from '../../pages/home/home';

@Component({
  selector: 'app-user-layout',
  imports: [UserFooter , UserNav , Home],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss',
})
export class UserLayout {}
