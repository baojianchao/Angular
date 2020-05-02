import { Component } from '@angular/core';
import { TestAService } from './testa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch07';

  constructor(private aServive: TestAService) {
    this.aServive.setTitle('父组件');
    this.title = this.aServive.getTitle();
  }

  refresh() {
    this.title = this.aServive.getTitle();
  }
}
