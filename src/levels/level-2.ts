import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => undefined,
  tiles: [
    [START, MUD, MUD, ROCK],
    [GRASS, BUSH, MUD, TREE],
    [ROCK, GRASS, END, TREE],
  ]
};
