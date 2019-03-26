import {Component, Input} from '@angular/core';
import {TILES} from '../../consts';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() public tiles: Number[];

  public getTileClasses(tile: number, x: number, y: number): string[] {
    const classes = [`tile-${tile}`];
    const rand = (max) => (x + y) % max + 1;

    if (TILES.FLOWER === tile) {
      classes.push(`tile-${tile}--alt-${rand(2)}`);
    }

    if (TILES.BUSH === tile) {
      classes.push(`tile-${tile}--alt-${rand(3)}`);
    }

    if (TILES.ROCK === tile) {
      classes.push(`tile-${tile}--alt-${rand(3)}`);
    }

    if (TILES.TREE === tile) {
      classes.push(`tile-${tile}--alt-${rand(5)}`);
    }

    return classes;
  }
}
