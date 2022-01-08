import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class BadgeComponent {
  @Input() text = 'Ich bin ein Badge!';
}
