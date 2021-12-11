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
  constructor(private activateRoute: ActivatedRoute,  public translate: TranslateService){

      this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }
}
