import { TILES } from '../consts';

const { END, BUSH, FLOWER, GRASS, MUD, ROCK, START, TREE } = TILES;

export default {
  forbiddenTiles: [BUSH, ROCK, TREE],
  setup: () => {
    console.log('Bonjour et bienvenue dans cette simulation de Petit chaperon rouge');
    console.log('A travers cette simulation, vous pourrez contrôler le petit chaperon rouge... Que diriez-vous de l\'appeler "hood" ?');
    console.log('Quand vous souhaiterez lui demander quelque chose il faudra donc le faire via son nom : hood.faisCeci()');
    console.log('Quelques commandes sont dores et déjà disponibles :');
    console.log('hood.faceTo(\'north\') : permet de tourner Hood dans une direction (north, south, east, west)');
    console.log('hood.moveToNorth() : permet de déplacer Hood vers le nord');
    console.log('hood.moveToSouth() : permet de déplacer Hood vers le sud');
    console.log('hood.moveToEast() : permet de déplacer Hood vers l\'est');
    console.log('hood.moveToWest() : permet de déplacer Hood vers l\'ouest');
    console.log('La grand mère du petit chaperon rouge a toujours été romantique, et ses fleurs préférées sont les roses rouges.');
    console.log('Peut-être pourriez-vous aider Hood à en récolter');
    console.log('A vous de jouer...');
  },
  tiles: [
    [START, MUD, MUD, MUD, END],
  ]
};
