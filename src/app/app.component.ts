import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'We did it!!';

  constructor(private appService: AppService) {

  }

  logout() {
    this.appService.logout();
  }
}
