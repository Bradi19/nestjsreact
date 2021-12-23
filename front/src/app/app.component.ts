import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  id: number | undefined;
  private subscription: Subscription;
<<<<<<< HEAD
  constructor(private activateRoute: ActivatedRoute){
      
=======
  constructor(private activateRoute: ActivatedRoute,  public translate: TranslateService){

>>>>>>> 4a87a0ea0fa24c8987fab25c386a39f2a483fc15
      this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);

  }
}
