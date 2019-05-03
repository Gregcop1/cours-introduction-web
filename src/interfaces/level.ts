import {Board} from './board';

export interface Level {
  forbiddenTiles: number[];
  setup: () => void;
  tiles: Board;
}
