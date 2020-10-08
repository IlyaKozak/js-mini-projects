function safeResult(boardSize, moves, minutes, seconds) {
  let results = JSON.parse(localStorage.getItem('bestScores'));
  if (!results) results = [];
  results.push({ boardSize, moves, minutes, seconds });
  results = results.sort(compare);
  if (results.length > 10) results.length = 10;
  localStorage.setItem('bestScores', JSON.stringify(results));
}

function compare(a, b) {
  if (a.boardSize !== b.boardSize) return b.boardSize - a.boardSize;
  if (a.moves !== b.moves) return a.moves - b.moves;
  if (a.minutes !== b.minutes) return a.mintes - b.minutes;
  if (a.seconds !== b.seconds) return a.seconds - b.seconds;
  return 0;
}
