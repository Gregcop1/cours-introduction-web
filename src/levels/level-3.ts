import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => {
    console.log('%cJe suis déjà passée par ici...', 'font-size: 1.8em');
    console.log('Vous avez déjà résolu ce problème mais peut-être est-il temps de le faire plus rapidement.');
    console.log('Avez-vous déjà entendu parler des boucles et notamment de la boucle %cfor%c.', 'font-weight: bold', 'font-weight: normal');
    console.log('C\'est assez pratique quand on ne souhaite pas taper plusieurs fois la même commande.');
  },
  tiles: [
    [START, MUD, MUD, MUD, END],
  ]
};
