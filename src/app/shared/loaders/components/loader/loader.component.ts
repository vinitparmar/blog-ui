import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UiService } from '../../../../core/services/ui.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  constructor(public ui: UiService){}
}
