import { Injectable } from '@angular/core';
import { levels } from '../../levels';
import {BehaviorSubject} from 'rxjs';
import {Board, BoardSize, Coordinates} from '../../interfaces';
import {TILES} from '../../consts';


@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public tiles$: BehaviorSubject<Board> = new BehaviorSubject(null);
  public boardSize$: BehaviorSubject<BoardSize> = new BehaviorSubject(null);
  public startPosition$: BehaviorSubject<Coordinates> = new BehaviorSubject({x: 0, y: 0});

  public changeLevel(level: number): void {
    if (!levels[level]) {
      throw new Error('Unknown level.');
    }

    const currentLevel = levels[level];
    this.tiles$.next(currentLevel);
    this.boardSize$.next({
      height: currentLevel.length,
      width: currentLevel[0].length,
    });
    this.startPosition$.next(this.getStartPosition());
  }

  private getStartPosition(): Coordinates {
    const level = this.tiles$.getValue();
    let position: Coordinates;
    level.forEach((row, y) => {
      row.forEach((tile, x) => {
        if (TILES.START === +tile) {
          position = {x, y};
        }
      });
    });

    if (!position) {
      throw new Error('Unable to find start position');
    }

    return position;
  }
}
