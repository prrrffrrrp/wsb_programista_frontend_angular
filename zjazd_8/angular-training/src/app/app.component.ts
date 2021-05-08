import { Component } from '@angular/core';

@Component({
  selector: 'wsb-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  title = 'WSB Application';
  isToggled: boolean = false;
  userName: string = 'Marek';

  currentDate: Date = new Date();

  onCountChange(count) {
      console.log("COUNT was changed!", count)
  }

  toggleClass(): void {
      this.isToggled = !this.isToggled;
  }

  toggleName(): void {
      this.userName = this.userName === 'Marek' ? 'Maria' : 'Marek';
  }

}
