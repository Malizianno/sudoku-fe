import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'board',
  templateUrl: './board.html',
  styleUrl: './board.scss',
  imports: [FormsModule],
})
export class Board {
  public board: string[][] = [];
}
