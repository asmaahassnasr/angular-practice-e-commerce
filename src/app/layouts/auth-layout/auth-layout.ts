import { AuthNav } from './../../components/auth-nav/auth-nav';
import { AuthFooter } from './../../components/auth-footer/auth-footer';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [AuthFooter , AuthNav , RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {}
