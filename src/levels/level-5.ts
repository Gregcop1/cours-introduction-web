import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => {
    console.log('Sud-ouest, toujours sud ouest, elle commence à être répétitive cette forêt...');
    console.log('Alors, votre commande pour envoyer Hood au Sud Est fonctionne toujours ?');
    console.log('Après tout il y a deux chemins possible pour aller au Sud Ouest, non ?');
  },
  tiles: [
    [START, MUD, ROCK, TREE, GRASS, BUSH],
    [MUD, MUD, ROCK, GRASS, BUSH, TREE],
    [FLOWER, MUD, MUD, MUD, ROCK, FLOWER],
    [BUSH, FLOWER, ROCK, MUD, MUD, MUD],
    [BUSH, MUD, MUD, MUD, END, ROCK],
  ]
};
