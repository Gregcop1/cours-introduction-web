import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => {
    console.log('Sud-ouest, toujours sud ouest, elle commence à être répétitive cette forêt...');
    console.log('Alors, votre commande pour envoyer Hood au Sud Ouest fonctionne toujours ?');
    console.log('Après tout il y a deux chemins possible pour aller au Sud Ouest, non ?');
  },
  tiles: [
    [START, MUD, ROCK, TREE, GRASS, BUSH],
    [BUSH, MUD, MUD, MUD, BUSH, TREE],
    [FLOWER, ROCK, GRASS, MUD, ROCK, FLOWER],
    [BUSH, FLOWER, ROCK, MUD, MUD, TREE],
    [BUSH, MUD, MUD, MUD, END, ROCK],
  ]
};
