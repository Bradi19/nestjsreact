import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import {TranslateService} from '@ngx-translate/core';

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  products: any[] = [];
  constructor(private dataService: ConfigService,  public translate: TranslateService) { }

  ngOnInit(): void {

    this.dataService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    })  
  }

}
