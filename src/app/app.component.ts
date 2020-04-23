import { Component } from '@angular/core';

@Component({
  selector: 'insurance-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Auto Insurance Claim';

  logoPath:string = './assets/app_logo.jpg';
}
