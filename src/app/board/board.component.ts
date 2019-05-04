import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TILES} from '../../consts';
import {BoardService} from './board.service';
import {Board} from '../../interfaces';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BoardComponent implements OnInit {
  public tiles: Board;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.tiles$.subscribe((tiles: Board) => this.tiles = tiles);
  }

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
