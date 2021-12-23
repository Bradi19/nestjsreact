import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  id: number | undefined;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute){
      
      this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);

  }
}
