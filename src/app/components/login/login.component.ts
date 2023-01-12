import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit{
  
    constructor(public auth: AuthService) {}
  
  
    ngOnInit(): void {
    }
  
    loginWithRedirect(): void {
      this.auth.loginWithRedirect();
    }

}
