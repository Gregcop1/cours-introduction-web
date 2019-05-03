import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => undefined,
  tiles: [
    [START, MUD, ROCK, TREE, GRASS],
    [BUSH, MUD, MUD, BUSH, FLOWER],
    [FLOWER, ROCK, MUD, MUD, TREE],
    [TREE, GRASS, BUSH, END, ROCK],
  ]
};
