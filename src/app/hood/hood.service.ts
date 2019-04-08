import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BoardService} from '../board/board.service';
import {Coordinates} from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HoodService {
  public position$: BehaviorSubject<Coordinates> = new BehaviorSubject(null);

  constructor(boardService: BoardService) {
    boardService.startPosition$.subscribe(({x, y}: Coordinates) => {
      this.moveTo(x, y);
    });
  }

  public moveTo(x: number, y: number): void {
    this.position$.next({x, y});
  }
}
