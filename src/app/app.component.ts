import { Component } from '@angular/core';
import { UserregService } from './userreg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  constructor(private users:UserregService){}
}
