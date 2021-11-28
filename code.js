const map = [
	'WWWWWWWWWWWWWWWWWWWWW',
	'W   W     W     W   W',
	'W W W WWW WWWWW W WWW',
	'W W W  W      W W   W',
	'W WWWWWWW W WWW W W W',
	'W         W     W W W',
	'W WWW WWWWW WWWWW W W',
	'W W   W   W W     W W',
	'W WWWWW W W W WWW W F',
	'S     W W W W W W WWW',
	'WWWWW W W W W W W W W',
	'W     W W W   W W W W',
	'W WWWWWWW WWWWW W W W',
	'W       W       W   W',
	'WWWWWWWWWWWWWWWWWWWWW',
];

// Your Code Here.

const background = document.createElement('div');
document.body.append(background);

// Rendering the maze
for (const row of map) {
	// rows
	const rowDiv = document.createElement('div');
	rowDiv.classList.add('row');
	for (const cell of row) {
		// cells
		const cellDiv = document.createElement('div');
		if (cell == 'S' || cell == 'F') {
      if (cell == 'S') {
        // player
				const player = document.createElement('div');
				player.classList.add('player');
				cellDiv.append(player);
			}
      // start and finish
			const startFinishImg = document.createElement('img');
			startFinishImg.src =
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5qWO7CuoiWk4yDetQGW4Ee3WLIo3iBvnDw&usqp=CAU';
			cellDiv.append(startFinishImg);
		} else if (cell === 'W') {
			// walls
			cellDiv.classList.add('wall');
		}
    cellDiv.classList.add('cell');
    rowDiv.append(cellDiv);
    background.append(rowDiv);
	}
}

let playerTop = 330;
let playerLeft = 265;
let playerPosition = [9, 0];

function movePlayer(event) {
  player = document.querySelector('.player');
  if (event.code == 'ArrowUp') {
    // wall check
    if (map[playerPosition[0] - 1][playerPosition[1]] == 'W') {
      return;
    }
    playerTop -= 32;
    playerPosition[0] -= 1;
  } else if (event.code == 'ArrowRight') {
    if (map[playerPosition[0]][playerPosition[1] + 1] == 'W') {
      return;
    }
    playerLeft += 36;
    playerPosition[1] += 1
  } else if (event.code == 'ArrowDown') {
    if (map[playerPosition[0] + 1][playerPosition[1]] == 'W') {
      return;
    }
    playerTop += 32;
    playerPosition[0] += 1;
  } else if (event.code == 'ArrowLeft') {
    if (map[playerPosition[0]][playerPosition[1] - 1] == 'W') {
      return;
    }
    playerLeft -= 36;
    playerPosition[1] -= 1
  }
  player.style.top = playerTop + 'px';
  player.style.left = playerLeft +'px';
  youWin();
}

function youWin() {
  if (playerPosition[0] === 8 && playerPosition[1] === 20) {
    background.classList.toggle('background');
  }
}

document.addEventListener('keydown', movePlayer);
