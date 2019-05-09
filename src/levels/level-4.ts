import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => {
    console.log('Oulà, les choses se compliquent...');
    console.log('À nouveau, la boucle "for" pourrait vous faire gagner beaucoup de temps.');
    console.log('Dans un second temps, je me dis qu\'il serait peut-être temps d\'apprendre à Hood à se déplacer dans les 8 directions');
    console.log('Que diriez-vous de lui expliquer comment aller vers le Sud Est... Ça paraît tout à fait approprié dans ce niveau...');
    console.log('Vous ne le saviez sans doute pas mais vous avez la possibilité de demander à Hood si elle peut se déplacer sur une case');
    console.log('Tentez de lui demander si elle peut se déplacer quelque part via: hood.canMoveTo({x: 2, y: 5})');
  },
  tiles: [
    [START, MUD, ROCK, TREE, GRASS],
    [BUSH, MUD, MUD, BUSH, FLOWER],
    [FLOWER, ROCK, MUD, MUD, TREE],
    [TREE, GRASS, BUSH, END, ROCK],
  ]
};
