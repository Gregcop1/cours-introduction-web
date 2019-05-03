import {Component, HostListener, OnInit} from '@angular/core';
import {HoodService} from './hood.service';
import {BoardSize, Coordinates, Direction} from '../../interfaces';
import {TILE} from '../../consts';
import {BoardService} from '../board/board.service';
import {Subject} from 'rxjs';
import {throttleTime} from 'rxjs/operators';

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
  private direction: Direction;
  private boardSize: BoardSize;
  private moveRequest: Subject<null> = new Subject();

  constructor(private boardService: BoardService, private hoodService: HoodService) { }

  ngOnInit() {
    this.boardService.boardSize$.subscribe((size: BoardSize) => this.boardSize = size);
    this.hoodService.position$.subscribe((position: Coordinates) => this.position = position);
    this.hoodService.direction$.subscribe((direction: Direction) => this.direction = direction);
    this.moveRequest.asObservable().pipe(
      throttleTime(250),
    ).subscribe(this.moveForward.bind(this));
  }

  public get styles(): Styles {
    return {
      left: ((this.position.x + this.position.y) * TILE.WIDTH / 2) + this.position.x + 'px',
      bottom: (-(((this.position.y / 2) + 1) * TILE.HEIGHT) + (this.position.x / 2 * TILE.HEIGHT)) + 'px',
      zIndex: this.position.y + 1,
    };
  }

  public moveForward(): void {
    const newPosition = {...this.position};
    switch (this.direction) {
      case Direction.NORTH : newPosition.x = newPosition.x + 1;
        break;
      case Direction.SOUTH : newPosition.x = newPosition.x - 1;
        break;
      case Direction.EAST : newPosition.y = newPosition.y - 1;
        break;
      case Direction.WEST : newPosition.y = newPosition.y + 1;
        break;
    }

    this.hoodService.moveTo(newPosition.x, newPosition.y);
  }

  public faceTo(direction: Direction): void {
    this.hoodService.faceTo(direction);
  }

  @HostListener('window:keydown', ['$event'])
  private keyDown(event: KeyboardEvent): void {
    switch (event.code) {
      case 'ArrowUp': this.faceTo(Direction.NORTH);
        break;
      case 'ArrowDown': this.faceTo(Direction.SOUTH);
        break;
      case 'ArrowLeft': this.faceTo(Direction.EAST);
        break;
      case 'ArrowRight': this.faceTo(Direction.WEST);
        break;
      case 'Space': this.moveRequest.next();
        break;
    }
  }
}
