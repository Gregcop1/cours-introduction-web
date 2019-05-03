import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { levels } from '../../levels';
import {BoardService} from '../board/board.service';
import {BoardSize} from '../../interfaces';
import {TILE} from '../../consts';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class GameComponent implements OnInit {
  @Input() public level = 4;
  public boardSize: BoardSize;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.boardSize$.subscribe((size: BoardSize) => this.boardSize = size);
    this.boardService.changeLevel(this.level);
  }

  public get gameboardSize() {
    const nbTileHeight = this.boardSize.height;
    const nbTileWidth = (this.boardSize.width / 2) + (nbTileHeight / 2);

    return {
      width: TILE.WIDTH * nbTileWidth + (nbTileWidth * 2) + 'px',
      height: (TILE.HEIGHT / 2 * nbTileHeight) + 90 + 'px',
    };
  }

}
