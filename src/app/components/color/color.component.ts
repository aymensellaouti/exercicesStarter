import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  /**
   * It changes the color state attribute
   *
   * @param newColor
   * @returns void
   */
  changeColor(newColor: string): void {

  }

  /**
   * It reset the color
   */
  reset() {

  }
}
