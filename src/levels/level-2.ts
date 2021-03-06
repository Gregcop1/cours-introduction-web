import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => {
    console.log('Vous pensiez vraiment que tout serait toujours aussi simple ?');
    console.log('Les forêts sont rarement droites, et cette fois il vous faudra sans doute prendre quelques détours.');
  },
  tiles: [
    [START, MUD, MUD, ROCK],
    [GRASS, BUSH, MUD, TREE],
    [ROCK, GRASS, END, TREE],
  ]
};
