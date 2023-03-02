import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent  implements OnInit {
  constructor(public dataService: DataService, public router: Router){}
  ngOnInit(): void {

  }

  role = ''
  password = ''
  wrong = false;

  login(){
    
    if(this.role != 'buscador' ||  this.password != 'ciudadano'){
      this.wrong = true
    }
    if(this.role != 'ciudadano' || this.password != 'buscador'){
      this.wrong = true
    }
    if(this.role == 'buscador' && this.password =='buscador'){
      this.dataService.user.next(this.role);
      this.router.navigate(['home']);
    }
    if((this.role == 'ciudadano' && this.password == 'ciudadano') ){
      
      this.dataService.user.next(this.role);
      this.router.navigate(['state']);
    }
  }

}
