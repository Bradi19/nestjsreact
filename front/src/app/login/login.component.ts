import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  products: any[] = [];
  constructor(private dataService: ConfigService) { }

  ngOnInit(): void {

    this.dataService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    })  
  }

}
