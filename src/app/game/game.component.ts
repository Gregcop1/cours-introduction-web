import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { levels } from '../../levels';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class GameComponent implements OnInit {
  @Input() public level = 2;
  public currentLevel;
  private tileWidth = 175;
  private tileHeight = 102;

  ngOnInit() {
    this.currentLevel = levels[this.level];
  }

  public get gameboardSize() {
    const nbWidth = this.currentLevel[0].length;
    const nbTileHeight = this.currentLevel.length;
    const nbTileWidth = (nbWidth / 2) + (nbTileHeight / 2);

    return {
      width: this.tileWidth * nbTileWidth + (nbTileWidth * 2) + 'px',
      height: (this.tileHeight / 2 * nbTileHeight) + 90 + 'px',
    };
  }

}
