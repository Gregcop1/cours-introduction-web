import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BoardService} from '../board/board.service';
import {Coordinates, Direction} from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HoodService {
  public position$: BehaviorSubject<Coordinates> = new BehaviorSubject({x: 0, y: 0});
  public direction$: BehaviorSubject<Direction> = new BehaviorSubject(Direction.SOUTH);

  constructor(private boardService: BoardService) {
    boardService.startPosition$.subscribe((position: Coordinates) => {
      if (position) {
        this.moveTo(position);
      }
    });
    (window as any).hood = this;
  }

  public getPosition(): Coordinates {
    return this.position$.getValue();
  }

  public faceTo(direction: Direction): void {
    this.direction$.next(direction);
  }

  public async moveTo(newPosition: Coordinates): Promise<void> {
    if (this.canMoveTo(newPosition)) {
      this.position$.next(newPosition);
      this.checkStatus();

      await new Promise(success => {
        setTimeout(success, 500);
      });
    }
  }

  public async moveToNorth(): Promise<void> {
    this.faceTo(Direction.NORTH);
    const {x, y} = this.getPosition();
    await this.moveTo({x: x + 1, y});
  }

  public async moveToSouth(): Promise<void> {
    this.faceTo(Direction.SOUTH);
    const {x, y} = this.getPosition();
    await this.moveTo({x: x - 1, y});
  }

  public async moveToEast(): Promise<void> {
    this.faceTo(Direction.EAST);
    const {x, y} = this.getPosition();
    await this.moveTo({x, y: y + 1});
  }

  public async moveToWest(): Promise<void> {
    this.faceTo(Direction.WEST);
    const {x, y} = this.getPosition();
    await this.moveTo({x, y: y - 1});
  }

  public canMoveTo(position: Coordinates): boolean {
    return this.boardService.isInBoard(position) &&
      this.boardService.isAuthorized(position);
  }

  public checkStatus(): void {
    const currentPosition = this.position$.getValue();

    if (this.boardService.isEndPosition(currentPosition)) {
      console.log('Merci, je suis sûre que ma grand mère adorera ces fleurs.');
    } else if (this.boardService.isFlower(currentPosition)) {
      console.log('Argh. C\'est gentil mais ma grand mère préfère les roses rouges.');
    }
  }
}
