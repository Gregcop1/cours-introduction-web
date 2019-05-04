import {ChangeDetectorRef, Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
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
  styleUrls: ['./hood.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HoodComponent implements OnInit {
  private position: Coordinates;
  public direction: Direction;
  private boardSize: BoardSize;
  private moveRequest$: Subject<Direction> = new Subject();

  constructor(
    private boardService: BoardService,
    private hoodService: HoodService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.boardService.boardSize$.subscribe((size: BoardSize) => this.boardSize = size);
    this.hoodService.position$.subscribe((position: Coordinates) => {
      this.position = position;
      this.cdr.detectChanges();
    });
    this.hoodService.direction$.subscribe((direction: Direction) => {
      this.direction = direction;
      this.cdr.detectChanges();
    });
    this.moveRequest$.asObservable().pipe(
      throttleTime(250),
    ).subscribe((direction: Direction) => this.move(direction));
  }

  public get styles(): Styles|null {
    if (!this.position) {
      return null;
    }

    return {
      left: ((this.position.x + this.position.y) * TILE.WIDTH / 2) + this.position.x + 'px',
      bottom: (-(((this.position.y / 2) + 1) * TILE.HEIGHT) + (this.position.x / 2 * TILE.HEIGHT)) + 'px',
      zIndex: this.position.y + 1,
    };
  }

  public move(direction: Direction): void {
    switch (direction) {
      case Direction.NORTH: this.hoodService.moveToNorth();
        break;
      case Direction.SOUTH: this.hoodService.moveToSouth();
        break;
      case Direction.EAST: this.hoodService.moveToEast();
        break;
      case Direction.WEST: this.hoodService.moveToWest();
        break;
    }
  }

  @HostListener('window:keydown', ['$event'])
  private keyDown(event: KeyboardEvent): void {
    let direction: Direction;
    switch (event.code) {
      case 'ArrowUp': direction = Direction.NORTH;
        break;
      case 'ArrowDown': direction = Direction.SOUTH;
        break;
      case 'ArrowLeft': direction = Direction.EAST;
        break;
      case 'ArrowRight': direction = Direction.WEST;
        break;
    }

    this.moveRequest$.next(direction);
  }
}
