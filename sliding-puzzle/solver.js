function solveBoard(board) {
  const solution = [];

  function locate(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === num) return [i, j];
      }
    }
    return [null, null];
  }

  function move(arr, i, j, dir) {
    if (dir === 'u') {
      arr[i][j] = arr[i - 1][j];
      arr[i - 1][j] = 0;
      solution.push('up');
      return [arr, i - 1, j];
    }
    if (dir === 'd') {
      arr[i][j] = arr[i + 1][j];
      arr[i + 1][j] = 0;
      solution.push('down');
      return [arr, i + 1, j];
    }
    if (dir === 'r') {
      arr[i][j] = arr[i][j + 1];
      arr[i][j + 1] = 0;
      solution.push('right');
      return [arr, i, j + 1];
    }
    if (dir === 'l') {
      arr[i][j] = arr[i][j - 1];
      arr[i][j - 1] = 0;
      solution.push('left');
      return [arr, i, j - 1];
    }
  }

  function reset(arr, i, j, num) {
    arr = res(arr, i, j);
    return et(arr, num);
  }

  function res(arr, i, j) {
    const n = arr.length;
    while (i !== n - 1) {
      [arr, i, j] = move(arr, i, j, 'd');
    }
    while (j !== n - 1) {
      [arr, i, j] = move(arr, i, j, 'r');
    }
    return arr;
  }

  function et(arr, num) {
    const n = arr.length;
    const [i0, j0] = locate(arr, num);
    let [i, j] = [n - 1, n - 1];
    if (i0 !== n - 1) {
      while (j !== j0) {
        [arr, i, j] = move(arr, i, j, 'l');
      }
      while (i !== i0 + 1) {
        [arr, i, j] = move(arr, i, j, 'u');
      }
    } else {
      while (j !== j0 + 1) {
        [arr, i, j] = move(arr, i, j, 'l');
      }
      [arr, i, j] = move(arr, i, j, 'u');
      [arr, i, j] = move(arr, i, j, 'l');
      [arr, i, j] = move(arr, i, j, 'd');
    }
    return [arr, i, j];
  }

  function blockMove(arr, i, j, dir) {
    if (dir === 'r') {
      [arr, i, j] = move(arr, i, j, 'r');
      [arr, i, j] = move(arr, i, j, 'u');
      [arr, i, j] = move(arr, i, j, 'l');
      [arr, i, j] = move(arr, i, j, 'd');
      [arr, i, j] = move(arr, i, j, 'r');
    } else if (dir === 'l') {
      [arr, i, j] = move(arr, i, j, 'l');
      [arr, i, j] = move(arr, i, j, 'u');
      [arr, i, j] = move(arr, i, j, 'r');
      [arr, i, j] = move(arr, i, j, 'd');
      [arr, i, j] = move(arr, i, j, 'l');
    } else if (dir === 'ur') {
      [arr, i, j] = move(arr, i, j, 'r');
      [arr, i, j] = move(arr, i, j, 'u');
      [arr, i, j] = move(arr, i, j, 'u');
      [arr, i, j] = move(arr, i, j, 'l');
      [arr, i, j] = move(arr, i, j, 'd');
    } else if (dir === 'ul') {
      [arr, i, j] = move(arr, i, j, 'l');
      [arr, i, j] = move(arr, i, j, 'u');
      [arr, i, j] = move(arr, i, j, 'u');
      [arr, i, j] = move(arr, i, j, 'r');
      [arr, i, j] = move(arr, i, j, 'd');
    }
    return [arr, i, j];
  }

  function solvePiece(arr, i, j, num) {
    const n = arr.length;
    let i0 = Math.floor((num - 1) / n);
    let j0 = (num - 1) % n;
    if (j0 < n - 2) {
      while (j !== j0) {
        if (j < j0) {
          [arr, i, j] = blockMove(arr, i, j, 'r');
        } else {
          [arr, i, j] = blockMove(arr, i, j, 'l');
        }
      }
      while (i !== i0 + 1) {
        [arr, i, j] = blockMove(arr, i, j, 'ur');
      }
    } else if (j0 === n - 2) {
      j0 = n - 1;
      while (j !== j0) {
        [arr, i, j] = blockMove(arr, i, j, 'r');
      }
      while (i !== i0 + 1) {
        [arr, i, j] = blockMove(arr, i, j, 'ul');
      }
    } else {
      if (i !== i0 + 1) {
        while (j !== j0) {
          [arr, i, j] = blockMove(arr, i, j, 'r');
        }
        while (i !== i0 + 1) {
          [arr, i, j] = blockMove(arr, i, j, 'ul');
        }
      } else {
        for (const dir of 'urddluurdlurdldrulurd') {
          [arr, i, j] = move(arr, i, j, dir);
        }
      }
    }
    return [arr, i, j];
  }

  function solve(arr) {
    const n = arr.length;
    let [i, j] = locate(arr, 0);

    for (let k = 1; k < 1 + n * (n - 2); k++) {
      [arr, i, j] = reset(arr, i, j, k);
      [arr, i, j] = solvePiece(arr, i, j, k);
    }

    for (let k = 1; k < n - 1; k++) {
      const first = k + (n - 2) * n;
      [arr, i, j] = reset(arr, i, j, first);
      [arr, i, j] = solvePiece(arr, i, j, first);
      arr = res(arr, i, j);
      if (arr[n - 1][k - 1] === first + n) {
        i = n - 1;
        j = n - 1;
        continue;
      }
      [arr, i, j] = et(arr, first + n);
      while (j !== k) {
        [arr, i, j] = blockMove(arr, i, j, 'l');
      }
      [arr, i, j] = blockMove(arr, i, j, 'r');
      for (const dir of 'llurdruldrulldr') {
        [arr, i, j] = move(arr, i, j, dir);
      }
    }
    [arr, i, j] = reset(arr, i, j, n * (n - 1) - 1);
    if (j === n - 1) {
      [arr, i, j] = blockMove(arr, i, j, 'l');
    }
    [arr, i, j] = move(arr, i, j, 'r');

    let answer = [...solution];
    solution.length = 0;

    // Clear up answer from redundant moves
    let answerStr = answer.join();
    while (/right,left|left,right|up,down|down,up/.test(answerStr)) {
      answerStr = answerStr
        .replace(/right,left|left,right|up,down|down,up/g, '')
        .replace(/,+/g, ',');
    }

    answer = answerStr.split(',');

    return arr[n - 1][n - 2] !== n * n - 1 ? null : answer;
  }

  return solve(board);
}
