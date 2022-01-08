import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-app';
  list = [
    {
      label: 'Wert 1',
      value: 1,
    },
    {
      label: 'Wert 2',
      value: 2,
    },
    {
      label: 'Wert 3',
      value: 3,
    },
  ];
}
