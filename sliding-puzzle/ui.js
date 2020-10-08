const body = document.getElementsByTagName('body')[0];
const container = document.createElement('div');
container.className = 'container';

// Menu
const menu = document.createElement('div');
menu.className = 'menu-container';

const boardGameSize = document.createElement('div');
const boardSizeText = document.createElement('div');
boardSizeText.innerText = 'choose board size:';
boardGameSize.appendChild(boardSizeText);
const boardSizeOptions = document.createElement('div');
boardSizeOptions.className = 'board-size';
boardSizeOptions.innerHTML = `<ul><li data-size="3">3x3</li> <li data-size="4">4x4</li> <li data-size="5">5x5</li> <li data-size="6">6x6</li> <li data-size="7">7x7</li> <li data-size="8">8x8</li></ul>`;
boardGameSize.appendChild(boardSizeOptions);

const boardTilesStyle = document.createElement('div');
const boardTilesStyleText = document.createElement('div');
boardTilesStyleText.innerText = 'board tiles as:';
boardTilesStyle.appendChild(boardTilesStyleText);
const boardTilesStyleOptions = document.createElement('div');
boardTilesStyleOptions.className = 'tiles-style';
boardTilesStyleOptions.innerHTML = `<ul><li data-tilesstyle="numbers">numbers</li> <li data-tilesstyle="images">images</li></ul>`;
boardTilesStyle.appendChild(boardTilesStyleOptions);

const sound = document.createElement('div');
sound.className = 'sound';
sound.innerHTML = soundMuted;

const saveGame = document.createElement('div');
saveGame.className = 'save-game';
saveGame.innerHTML = 'save<br>game';

const loadGame = document.createElement('div');
loadGame.className = 'load-game';
loadGame.innerHTML = 'load<br>game';

const bestScores = document.createElement('div');
bestScores.className = 'best-scores';
bestScores.innerHTML = 'best<br>scores';

const solvePuzzle = document.createElement('div');
solvePuzzle.className = 'solve-puzzle';
solvePuzzle.innerHTML = 'solve<br>puzzle';

const hamburgerMenu = document.createElement('button');
hamburgerMenu.className = 'hamburger';
hamburgerMenu.setAttribute(
  'onclick',
  `this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))`
);
hamburgerMenu.setAttribute('aria-label', 'Main Menu');
hamburgerMenu.innerHTML = burger;

menu.appendChild(saveGame);
menu.appendChild(loadGame);
menu.appendChild(boardGameSize);
menu.appendChild(boardTilesStyle);
menu.appendChild(bestScores);
menu.appendChild(solvePuzzle);
menu.appendChild(sound);

container.appendChild(hamburgerMenu);

// Game Controls
const gameControls = document.createElement('div');
const pausePlay = document.createElement('button');
pausePlay.id = 'pause';
pausePlay.innerText = 'Play';
const newGame = document.createElement('button');
newGame.id = 'new-game';
newGame.innerText = 'New Game';
gameControls.appendChild(pausePlay);
gameControls.appendChild(newGame);
gameControls.className = 'game-controls';

// Game Board
const board = document.createElement('div');
board.className = 'board-container';

// Overlay screen
const overlay = document.createElement('div');
overlay.className = 'overlay-container';
overlay.innerHTML = overlayPlay;

// Game Statistics
const gameStats = document.createElement('div');
const moves = document.createElement('span');
moves.id = 'moves';
moves.innerText = 'Moves: 0';
const time = document.createElement('span');
time.id = 'time';
time.innerText = 'Time: 00:00';
gameStats.appendChild(moves);
gameStats.appendChild(time);
gameStats.className = 'game-stats';

container.appendChild(menu);
container.appendChild(gameControls);
container.appendChild(board);
container.appendChild(overlay);
container.appendChild(gameStats);
body.appendChild(container);
