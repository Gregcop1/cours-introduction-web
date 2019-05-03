import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => undefined,
  tiles: [
    [START, MUD, ROCK, TREE, GRASS, BUSH],
    [BUSH, MUD, MUD, MUD, BUSH, TREE],
    [FLOWER, ROCK, GRASS, MUD, ROCK, FLOWER],
    [BUSH, FLOWER, ROCK, MUD, MUD, TREE],
    [BUSH, MUD, MUD, MUD, END, ROCK],
  ]
};
