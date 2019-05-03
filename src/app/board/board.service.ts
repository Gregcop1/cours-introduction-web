import { Injectable } from '@angular/core';
import { levels } from '../../levels';
import {BehaviorSubject, Subject} from 'rxjs';
import {Board, BoardSize, Coordinates, Level} from '../../interfaces';
import {TILES} from '../../consts';


@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public level$: BehaviorSubject<Level> = new BehaviorSubject(null);
  public tiles$: BehaviorSubject<Board> = new BehaviorSubject([]);
  public boardSize$: BehaviorSubject<BoardSize> = new BehaviorSubject(null);
  public startPosition$: Subject<Coordinates> = new Subject();

  public constructor() {
    this.level$.subscribe((level: Level) => {
      if (!level) {
        return;
      }

      const {tiles} = level;
      this.tiles$.next(tiles);
      this.boardSize$.next({
        height: tiles.length,
        width: tiles[0].length,
      });
      this.startPosition$.next(this.getStartPosition(tiles));
    });
  }

  public changeLevel(level: number): void {
    if (!levels[level]) {
      throw new Error('Unknown level.');
    }

    this.level$.next(levels[level]);
  }

  private getStartPosition(tiles: Board): Coordinates {
    let position: Coordinates;
    tiles.forEach((row, y) => {
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

  public isOfType({x, y}: Coordinates, tileType: number): boolean {
    const tiles = this.tiles$.getValue();

    return tiles.length && tiles[y] && undefined !== tiles[y][x] && tileType === tiles[y][x];
  }

  public isEndPosition(position: Coordinates): boolean {
    return this.isOfType(position, TILES.END);
  }

  public isFlower(position: Coordinates): boolean {
    return this.isOfType(position, TILES.FLOWER);
  }

  public isInBoard({x, y}: Coordinates): boolean {
    if (!this.boardSize$.getValue()) {
      return false;
    }

    const {width, height} = this.boardSize$.getValue();

    return x >= 0 && x < width && y >= 0 && y < height;
  }

  public isAuthorized({x, y}: Coordinates): boolean {
    const {forbiddenTiles, tiles} = this.level$.getValue();

    if (!tiles.length || !tiles[y] || undefined === tiles[y][x]) {
      return false;
    }

    return !forbiddenTiles.includes(tiles[y][x]);
  }
}
