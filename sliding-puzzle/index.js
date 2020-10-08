// Game State
const gameBoard = [];
let boardSize = 4;
let tilesStyle = 'numbers';
let gameIsPaused = true;
let gameIsEnded = false;
let movesCount = 0;
let timeCount = 0;

const IMAGES_FROM = 1;
const IMAGES_TO = 150;
let randomImageNumber = randomIntFromInterval(IMAGES_FROM, IMAGES_TO);

const timeouts = [];
const GAP_BETWEEN_TILES = 5.2;

let isMuted = true;

function startGame() {
  // Clear Timeouts if Any
  clearTimeouts(timeouts);
  // Reset moves, time and game board
  movesCount = 0;
  timeCount = 0;
  gameBoard.length = 0;

  randomImageNumber = randomIntFromInterval(IMAGES_FROM, IMAGES_TO);
  gameIsEnded = false;
  overlay.innerHTML = overlayPlay;
  overlay.classList.remove('hidden');
  if (!isMuted) shuffleSound.play();
  pausePlay.innerText = 'Play';
  getRandomGameBoard(gameBoard, boardSize);

  const newRandomBoard = gameBoard.flat().reverse();
  renderBoard(newRandomBoard);
  checkBoard();
}

function getRandomGameBoard(board, boardSize) {
  generateGameBoard(board, boardSize);
  let blankTile = [boardSize - 1, boardSize - 1];
  for (let i = 0; i < boardSize ** 5; i++) {
    const nextdoorTiles = getNextdoorTiles(blankTile, boardSize);
    const randomNextdoorTile =
      nextdoorTiles[Math.floor(Math.random() * nextdoorTiles.length)];
    const temp = board[randomNextdoorTile[0]][randomNextdoorTile[1]];
    board[blankTile[0]][blankTile[1]] = temp;
    board[randomNextdoorTile[0]][randomNextdoorTile[1]] = 0;
    blankTile = [randomNextdoorTile[0], randomNextdoorTile[1]];
  }

  if (isSolved(board)) return getRandomGameBoard(board, boardSize);
  return board;
}

function pausePlayHandler() {
  // Clear Timeouts if Any
  clearTimeouts(timeouts);
  overlay.innerHTML = overlayPlay;

  if (!isMuted) clickSound.play();
  if (gameIsEnded) {
    gameIsEnded = false;
    startGame();
    return;
  }
  gameIsPaused = !gameIsPaused;
  if (!gameIsPaused) {
    showTime();
    overlay.classList.add('hidden');
  } else {
    overlay.classList.remove('hidden');
  }
  pausePlay.innerText = gameIsPaused ? 'Play' : 'Pause';
}

function moveTile(e) {
  if (e.target.dataset.id === 'empty') return;
  if (gameIsPaused) {
    gameIsPaused = false;
    pausePlay.innerText = 'Pause';
    showTime();
  }
  const distance = e.target.clientWidth;
  const x = e.target.offsetLeft + distance / 2;
  const y = e.target.offsetTop + distance / 2;
  if (
    document.elementFromPoint(x - distance, y) &&
    document.elementFromPoint(x - distance, y).dataset.id === 'empty'
  ) {
    swapTiles(e.target, document.elementFromPoint(x - distance, y));
  } else if (
    document.elementFromPoint(x, y - distance) &&
    document.elementFromPoint(x, y - distance).dataset.id === 'empty'
  ) {
    swapTiles(e.target, document.elementFromPoint(x, y - distance));
  } else if (
    document.elementFromPoint(x + distance, y) &&
    document.elementFromPoint(x + distance, y).dataset.id === 'empty'
  ) {
    swapTiles(e.target, document.elementFromPoint(x + distance, y));
  } else if (
    document.elementFromPoint(x, y + distance) &&
    document.elementFromPoint(x, y + distance).dataset.id === 'empty'
  ) {
    swapTiles(e.target, document.elementFromPoint(x, y + distance));
  } else {
    if (!isMuted) nomoveTileSound.play();
  }
}

function swapTiles(tile1, tile2) {
  if (!isMuted) moveTileSound.play();
  const number = tile1.dataset.id;
  tile1.innerText = '';
  tile1.dataset.id = 'empty';
  tile1.className = 'empty';
  tile1.removeAttribute('draggable');

  tile2.dataset.id = number;
  tile2.className = 'tile';
  tile2.setAttribute('draggable', 'true');
  if (tilesStyle === 'numbers') {
    tile2.innerText = number;
  } else {
    const x = tile1.dataset.x;
    const y = tile1.dataset.y;
    tile1.dataset.x = '';
    tile1.dataset.y = '';
    tile2.dataset.x = x;
    tile2.dataset.y = y;
    tile1.removeAttribute('style');

    tile2.style.backgroundImage = `url("./images/${randomImageNumber}.jpg")`;
    tile2.style.backgroundSize = `${board.clientWidth}px ${board.clientHeight}px`;
    tile2.style.backgroundRepeat = 'no-repeat';
    tile2.style.backgroundPosition = `-${x}px -${y}px`;
  }

  movesCount++;
  moves.innerText = `Moves: ${movesCount}`;
  checkBoard();
}

function checkBoard() {
  const tiles = board.children;
  let countTiles = 0;
  for (let i = 1; i <= tiles.length; i++) {
    if (i == tiles[i - 1].dataset.id) {
      tiles[i - 1].classList.add('in-place');
      countTiles++;
    }
  }
  if (countTiles === boardSize ** 2 - 1) showWinner();
}

function showWinner() {
  if (!isMuted) winSound.play();
  overlay.classList.remove('hidden');
  const winMessage = `Hooray!<br> You solved ${boardSize}x${boardSize} ${tilesStyle} puzzle in ${Math.floor(
    timeCount / 60
  )
    .toString()
    .padStart(2, '0')}:${(timeCount % 60)
    .toString()
    .padStart(2, '0')} and ${movesCount} moves`;
  overlay.innerHTML = winMessage;
  pausePlay.innerHTML = 'Refresh';
  gameIsEnded = true;
  gameIsPaused = true;
  safeResult(boardSize, movesCount, Math.floor(timeCount / 60), timeCount % 60);
}

function showTime() {
  if (gameIsPaused) return;
  timeCount++;
  const seconds = (timeCount % 60).toString().padStart(2, '0');
  const minutes = Math.floor(timeCount / 60)
    .toString()
    .padStart(2, '0');
  time.innerText = `Time: ${minutes}:${seconds}`;
  setTimeout(showTime, 1000);
}

function solvePuzzleHandler() {
  // Clear Timeouts if Any
  clearTimeouts(timeouts);

  // Update GameBoard to Current State in UI
  const tiles = board.children;
  let row = 0;
  let column = 0;
  let x;
  let y;
  let distX;
  let distY;
  for (let i = 0; i < tiles.length; i++) {
    if (column >= boardSize) {
      column = 0;
      row++;
    }
    if (tiles[i].dataset.id === 'empty') {
      if (i - 1 >= 0) {
        distX = tiles[i - 1].clientWidth;
        distY = tiles[i - 1].clientHeight;
      } else {
        distX = tiles[i + 1].clientWidth;
        distY = tiles[i + 1].clientWidth;
      }
      x = tiles[i].offsetLeft + distX / 2;
      y = tiles[i].offsetTop + distY / 2;
      gameBoard[row][column] = 0;
    } else {
      gameBoard[row][column] = +tiles[i].dataset.id;
    }
    column++;
  }
  const solution = solveBoard(gameBoard);

  // Animate Solution with Keyboard Presses Simulation
  if (menu.classList.contains('opened'))
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }));
  if (gameIsPaused) pausePlayHandler();

  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === 'left') {
      timeouts.push(
        setTimeout(
          () =>
            document.dispatchEvent(
              new KeyboardEvent('keydown', { keyCode: 39 })
            ),
          i * 300
        )
      );
    } else if (solution[i] === 'right') {
      timeouts.push(
        setTimeout(
          () =>
            document.dispatchEvent(
              new KeyboardEvent('keydown', { keyCode: 37 })
            ),
          i * 300
        )
      );
    } else if (solution[i] === 'up') {
      timeouts.push(
        setTimeout(
          () =>
            document.dispatchEvent(
              new KeyboardEvent('keydown', { keyCode: 40 })
            ),
          i * 300
        )
      );
    } else if (solution[i] === 'down') {
      timeouts.push(
        setTimeout(
          () =>
            document.dispatchEvent(
              new KeyboardEvent('keydown', { keyCode: 38 })
            ),
          i * 300
        )
      );
    }
  }

  /* Amimate Solution with Mouse Clicks Simulation (for small tiles chould be sloppy)
  const triggerClick = (x, y) => {
    if (!gameIsEnded) document.elementFromPoint(x, y).click();
  };

  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === 'down') {
      timeouts.push(
        setTimeout(
          triggerClick.bind(this, x, (y += distY + GAP_BETWEEN_TILES)),
          i * 300
        )
      );
    } else if (solution[i] === 'up') {
      timeouts.push(
        setTimeout(
          triggerClick.bind(this, x, (y -= distY + GAP_BETWEEN_TILES)),
          i * 300
        )
      );
    } else if (solution[i] === 'right') {
      timeouts.push(
        setTimeout(
          triggerClick.bind(this, (x += distX + GAP_BETWEEN_TILES), y),
          i * 300
        )
      );
    } else if (solution[i] === 'left') {
      timeouts.push(
        setTimeout(
          triggerClick.bind(this, (x -= distX + GAP_BETWEEN_TILES), y),
          i * 300
        )
      );
    }
  } */
}

function updateState() {
  const tiles = board.children;
  let column = 0;
  let row = 0;
  for (let i = 0; i < tiles.length; i++) {
    if (column >= boardSize) {
      column = 0;
      row++;
    }
    if (tiles[i].dataset.id === 'empty') {
      gameBoard[row][column] = 0;
    } else {
      gameBoard[row][column] = +tiles[i].dataset.id;
    }
    column++;
  }
}

function renderBoard(arr) {
  gameIsPaused = true;
  board.innerHTML = '';
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const number = arr.pop();
      const tile = document.createElement('div');
      if (number === 0) {
        tile.dataset.id = 'empty';
        tile.className = 'empty';
      } else {
        tile.dataset.id = number;
        if (tilesStyle === 'numbers') {
          tile.innerText = number;
        } else {
          const row = Math.floor((number - 1) / boardSize);
          const column = Math.floor((number - 1) % boardSize);
          const x = (board.clientWidth / boardSize) * column;
          const y = (board.clientHeight / boardSize) * row;
          tile.dataset.x = x;
          tile.dataset.y = y;
          tile.style.backgroundImage = `url("./images/${randomImageNumber}.jpg")`;
          tile.style.backgroundSize = `${board.clientWidth}px ${board.clientHeight}px`;
          tile.style.backgroundRepeat = 'no-repeat';
          tile.style.backgroundPosition = `-${x}px -${y}px`;
        }
        tile.setAttribute('draggable', 'true');
        tile.className = 'tile';
      }
      board.appendChild(tile);
    }
  }

  board.style.gridTemplateColumns = `repeat(${boardSize}, ${boardSize}fr)`;
  board.style.gridTemplateRows = `repeat(${boardSize}, ${boardSize}fr)`;

  moves.innerText = `Moves: ${movesCount}`;

  const seconds = (timeCount % 60).toString().padStart(2, '0');
  const minutes = Math.floor(timeCount / 60)
    .toString()
    .padStart(2, '0');
  time.innerText = `Time: ${minutes}:${seconds}`;
}

// Event Handlers
function boardSizeHandler(e) {
  const size = e.target.dataset.size;
  if (size > 0) {
    boardSize = Number(size);
    gameBoard.length = 0;
    startGame();
  }
}

function boardTilesStyleHandler(e) {
  const style = e.target.dataset.tilesstyle;
  if (style === 'numbers') {
    tilesStyle = 'numbers';
    startGame();
  } else if (style === 'images') {
    tilesStyle = 'images';
    startGame();
  }
}

function soundHandler() {
  isMuted = !isMuted;
  if (isMuted) {
    sound.innerHTML = soundMuted;
    gameMusic.pause();
  } else {
    sound.innerHTML = soundUnmuted;
    gameMusic.play();
  }
}

function hamburgerMenuHandler() {
  if (!isMuted) clickSound.play();
  menu.classList.toggle('opened');
  if (menu.classList.contains('opened')) gameIsPaused = true;
  else if (pausePlay.innerHTML === 'Pause') {
    gameIsPaused = false;
    showTime();
  }
}

function keyboardHandler(e) {
  const emptyTile = document.querySelector('[data-id="empty"]');
  const distance = emptyTile.clientWidth;
  const x = emptyTile.offsetLeft + distance / 2;
  const y = emptyTile.offsetTop + distance / 2;
  if (e.keyCode === 37) {
    // Left
    if (
      document.elementFromPoint(x + distance, y) &&
      document.elementFromPoint(x + distance, y).dataset.id > 0
    )
      swapTiles(document.elementFromPoint(x + distance, y), emptyTile);
  }
  if (e.keyCode === 39) {
    // Right
    if (
      document.elementFromPoint(x - distance, y) &&
      document.elementFromPoint(x - distance, y).dataset.id > 0
    )
      swapTiles(document.elementFromPoint(x - distance, y), emptyTile);
  }
  if (e.keyCode === 38) {
    // Up
    if (
      document.elementFromPoint(x, y + distance) &&
      document.elementFromPoint(x, y + distance).dataset.id > 0
    )
      swapTiles(document.elementFromPoint(x, y + distance), emptyTile);
  }
  if (e.keyCode === 40) {
    // Down
    if (
      document.elementFromPoint(x, y - distance) &&
      document.elementFromPoint(x, y - distance).dataset.id > 0
    )
      swapTiles(document.elementFromPoint(x, y - distance), emptyTile);
  }
  if (e.keyCode === 27) {
    // Escape
    if (menu.classList.contains('opened')) {
      hamburgerMenuHandler();
      hamburgerMenu.classList.remove('opened');
    }
  }
}

function saveGameHandler() {
  if (!isMuted) clickSound.play();
  if (overlay.childNodes.length > 1) return;
  updateState(gameBoard);
  const savedGameObj = {
    board: gameBoard,
    boardSize,
    tilesStyle,
    movesCount,
    timeCount,
    randomImageNumber
  };
  if (!gameIsPaused) pausePlayHandler();
  const saveMessage = document.createTextNode('Gamed is Saved!');
  overlay.appendChild(saveMessage);
  setTimeout(
    () =>
      overlay.childNodes.length > 1 ? overlay.removeChild(saveMessage) : null,
    1000
  );
  localStorage.setItem('savedGame', JSON.stringify(savedGameObj));
}

function loadGameHandler() {
  if (!isMuted) clickSound.play();
  let savedGame = localStorage.getItem('savedGame');
  if (!savedGame) return;
  if (!gameIsPaused) pausePlayHandler();
  overlay.innerHTML = overlayPlay;
  savedGame = JSON.parse(localStorage.getItem('savedGame'));
  boardSize = savedGame.boardSize;
  movesCount = savedGame.movesCount;
  timeCount = savedGame.timeCount;
  tilesStyle = savedGame.tilesStyle;
  if (tilesStyle === 'images') randomImageNumber = savedGame.randomImageNumber;
  renderBoard(savedGame.board.flat().reverse());
}

function bestScoresHandler() {
  if (!gameIsPaused) pausePlayHandler();
  const results = JSON.parse(localStorage.getItem('bestScores'));
  if (!results) {
    overlay.innerHTML = 'No scores recorded.';
    return;
  }
  const resultsHTML = results.map((res, idx) => {
    return `<tr><td>${idx + 1}</td><td>${res.boardSize}X${
      res.boardSize
    }</td><td>${res.moves}</td><td>${res.minutes
      .toString()
      .padStart(2, '0')}:${res.seconds.toString().padStart(2, '0')}</td></tr>`;
  });
  overlay.innerHTML = `<span class="scores">Best Scores:</span><table><tr><th>#</th><th>size</th><th>moves</th><th>time</th></tr>${resultsHTML.join(
    ''
  )}</table>`;
}

function dragstartHandler(e) {
  e.target.classList.add('drag');
  e.dataTransfer.setData('text', e.target.dataset.id);
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => e.target.classList.add('invisible'), 0);
}

function dragendHandler(e) {
  e.target.classList.remove('drag');
  e.target.classList.remove('invisible');
}

function dragoverHandler(e) {
  e.preventDefault();
}

function dropHandler(e) {
  if (e.target.dataset.id !== 'empty') return;
  const id = e.dataTransfer.getData('text');
  const distance = e.target.clientWidth;
  const x = e.target.offsetLeft + distance / 2;
  const y = e.target.offsetTop + distance / 2;
  if (
    document.elementFromPoint(x - distance, y) &&
    document.elementFromPoint(x - distance, y).dataset.id === id
  ) {
    swapTiles(document.elementFromPoint(x - distance, y), e.target);
  } else if (
    document.elementFromPoint(x, y - distance) &&
    document.elementFromPoint(x, y - distance).dataset.id === id
  ) {
    swapTiles(document.elementFromPoint(x, y - distance), e.target);
  } else if (
    document.elementFromPoint(x + distance, y) &&
    document.elementFromPoint(x + distance, y).dataset.id === id
  ) {
    swapTiles(document.elementFromPoint(x + distance, y), e.target);
  } else if (
    document.elementFromPoint(x, y + distance) &&
    document.elementFromPoint(x, y + distance).dataset.id === id
  ) {
    swapTiles(document.elementFromPoint(x, y + distance), e.target);
  }
}

// Event Listeners
pausePlay.addEventListener('click', pausePlayHandler);
newGame.addEventListener('click', startGame);
board.addEventListener('click', moveTile);
overlay.addEventListener('click', pausePlayHandler);
boardSizeOptions.addEventListener('click', boardSizeHandler);
boardTilesStyleOptions.addEventListener('click', boardTilesStyleHandler);
solvePuzzle.addEventListener('click', solvePuzzleHandler);
sound.addEventListener('click', soundHandler);
hamburgerMenu.addEventListener('click', hamburgerMenuHandler);
document.addEventListener('keydown', keyboardHandler);
saveGame.addEventListener('click', saveGameHandler);
loadGame.addEventListener('click', loadGameHandler);
bestScores.addEventListener('click', bestScoresHandler);

board.addEventListener('dragstart', dragstartHandler);
board.addEventListener('dragend', dragendHandler);
board.addEventListener('dragover', dragoverHandler);
board.addEventListener('drop', dropHandler);

startGame();
