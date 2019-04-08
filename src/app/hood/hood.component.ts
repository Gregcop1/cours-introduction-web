import { Component, OnInit } from '@angular/core';
import {HoodService} from './hood.service';
import {BoardSize, Coordinates} from '../../interfaces';
import {TILE} from '../../consts';
import {BoardService} from '../board/board.service';

interface Styles {
  bottom: string;
  left: string;
  zIndex: number;
}

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.scss']
})
export class HoodComponent implements OnInit {
  private position: Coordinates;
  private boardSize: BoardSize;

  constructor(private boardService: BoardService, private hoodService: HoodService) { }

  ngOnInit() {
    this.boardService.boardSize$.subscribe((size: BoardSize) => this.boardSize = size);
    this.hoodService.position$.subscribe((position: Coordinates) => this.position = position);
  }

  public get styles(): Styles {
    return {
      left: ((this.position.x + this.position.y) * TILE.WIDTH / 2) + this.position.x + 'px',
      bottom: (-(((this.position.y / 2) + 1) * TILE.HEIGHT) + (this.position.x / 2 * TILE.HEIGHT)) + 'px',
      zIndex: this.position.y + 1,
    };
  }

  public move() {
    this.hoodService.moveTo(this.position.x + 1, this.position.y);
  }
}
