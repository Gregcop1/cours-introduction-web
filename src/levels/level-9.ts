import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => undefined,
  tiles: [
    [GRASS, TREE, GRASS, MUD, ROCK, FLOWER, TREE],
    [TREE, FLOWER, BUSH, MUD, BUSH, MUD, ROCK],
    [TREE, FLOWER, GRASS, MUD, MUD, MUD, ROCK],
    [START, MUD, MUD, MUD, BUSH, MUD, ROCK],
    [GRASS, BUSH, FLOWER, BUSH, ROCK, END, TREE],
    [GRASS, GRASS, GRASS, BUSH, ROCK, GRASS, TREE],
  ]
};
