let player1 = true;
let player2 = false;
let squareOne = '';
let squareTwo = '';
let squareThree = '';
let squareFour = '';
let squareFive = '';
let squareSix = '';
let squareSeven = '';
let squareEight = '';
let squareNine = '';
let winner = false;
let whoWon = '';

document.getElementById('s1').addEventListener('click', function (event) {
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (event.target.classList.contains('taken')) {
    return alert('spot taken');
  }
  if (event.target.classList.contains('available') && player1 === true) {
    event.target.classList.remove('available');
    event.target.classList.add('playerOne');
    event.target.classList.add('taken');
    player1 = false;
    player2 = true;
    squareOne = 'playerOne';
    checkWin();
  } else {
    event.target.classList.add('playerTwo');
    event.target.classList.add('taken');
    event.target.classList.remove('available');
    player1 = true;
    player2 = false;
    squareOne = 'playerTwo';
    checkWin();
  }
});

document.getElementById('s2').addEventListener('click', function (event) {
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (event.target.classList.contains('taken')) {
    return alert('spot taken');
  }
  if (event.target.classList.contains('available') && player1 === true) {
    event.target.classList.remove('available');
    event.target.classList.add('playerOne');
    event.target.classList.add('taken');
    player1 = false;
    player2 = true;
    squareTwo = 'playerOne';
    checkWin();
  } else {
    event.target.classList.add('playerTwo');
    event.target.classList.add('taken');
    event.target.classList.remove('available');
    player1 = true;
    player2 = false;
    squareTwo = 'playerTwo';
    checkWin();
  }
});

document.getElementById('s3').addEventListener('click', function (event) {
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (event.target.classList.contains('taken')) {
    return alert('spot taken');
  }
  if (event.target.classList.contains('available') && player1 === true) {
    event.target.classList.remove('available');
    event.target.classList.add('playerOne');
    event.target.classList.add('taken');
    player1 = false;
    player2 = true;
    squareThree = 'playerOne';
    checkWin();
  } else {
    event.target.classList.add('playerTwo');
    event.target.classList.add('taken');
    event.target.classList.remove('available');
    player1 = true;
    player2 = false;
    squareThree = 'playerTwo';
    checkWin();
  }
});
document.getElementById('s4').addEventListener('click', function (event) {
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (event.target.classList.contains('taken')) {
    return alert('spot taken');
  }
  if (event.target.classList.contains('available') && player1 === true) {
    event.target.classList.remove('available');
    event.target.classList.add('playerOne');
    event.target.classList.add('taken');
    player1 = false;
    player2 = true;
    squareFour = 'playerOne';
    checkWin();
  } else {
    event.target.classList.add('playerTwo');
    event.target.classList.add('taken');
    event.target.classList.remove('available');
    player1 = true;
    player2 = false;
    squareFour = 'playerTwo';
    checkWin();
  }
});
document.getElementById('s5').addEventListener('click', function (event) {
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (event.target.classList.contains('taken')) {
    return alert('spot taken');
  }
  if (event.target.classList.contains('available') && player1 === true) {
    event.target.classList.remove('available');
    event.target.classList.add('playerOne');
    event.target.classList.add('taken');
    player1 = false;
    player2 = true;
    squareFive = 'playerOne';
    checkWin();
  } else {
    event.target.classList.add('playerTwo');
    event.target.classList.add('taken');
    event.target.classList.remove('available');
    player1 = true;
    player2 = false;
    squareFive = 'playerTwo';
    checkWin();
  }
});
document.getElementById('s6').addEventListener('click', function (event) {
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (event.target.classList.contains('taken')) {
    return alert('spot taken');
  }
  if (event.target.classList.contains('available') && player1 === true) {
    event.target.classList.remove('available');
    event.target.classList.add('playerOne');
    event.target.classList.add('taken');
    player1 = false;
    player2 = true;
    squareSix = 'playerOne';
    checkWin();
  } else {
    event.target.classList.add('playerTwo');
    event.target.classList.add('taken');
    event.target.classList.remove('available');
    player1 = true;
    player2 = false;
    squareSix = 'playerTwo';
    checkWin();
  }
});
document.getElementById('s7').addEventListener('click', function (event) {
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (event.target.classList.contains('taken')) {
    return alert('spot taken');
  }
  if (event.target.classList.contains('available') && player1 === true) {
    event.target.classList.remove('available');
    event.target.classList.add('playerOne');
    event.target.classList.add('taken');
    player1 = false;
    player2 = true;
    squareSeven = 'playerOne';
    checkWin();
  } else {
    event.target.classList.add('playerTwo');
    event.target.classList.add('taken');
    event.target.classList.remove('available');
    player1 = true;
    player2 = false;
    squareSeven = 'playerTwo';
    checkWin();
  }
});
document.getElementById('s8').addEventListener('click', function (event) {
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (event.target.classList.contains('taken')) {
    return alert('spot taken');
  }
  if (event.target.classList.contains('available') && player1 === true) {
    event.target.classList.remove('available');
    event.target.classList.add('playerOne');
    event.target.classList.add('taken');
    player1 = false;
    player2 = true;
    squareEight = 'playerOne';
    checkWin();
  } else {
    event.target.classList.add('playerTwo');
    event.target.classList.add('taken');
    event.target.classList.remove('available');
    player1 = true;
    player2 = false;
    squareEight = 'playerTwo';
    checkWin();
  }
});
document.getElementById('s9').addEventListener('click', function (event) {
  if (winner === true) {
    return console.log('WINNER!');
  }
  if (event.target.classList.contains('taken')) {
    return alert('spot taken');
  }
  if (event.target.classList.contains('available') && player1 === true) {
    event.target.classList.remove('available');
    event.target.classList.add('playerOne');
    event.target.classList.add('taken');
    player1 = false;
    player2 = true;
    squareNine = 'playerOne';
    checkWin();
  } else {
    event.target.classList.add('playerTwo');
    event.target.classList.add('taken');
    event.target.classList.remove('available');
    player1 = true;
    player2 = false;
    squareNine = 'playerTwo';
    checkWin();
  }
});

// let winner = false;
// let whoWon = '';
// document.querySelector('h2').innerText = `${whoWon}`
function checkWin() {
  if (
    (squareOne == 'playerOne' &&
      squareTwo == 'playerOne' &&
      squareThree == 'playerOne') ||
    (squareFour == 'playerOne' &&
      squareFive == 'playerOne' &&
      squareSix == 'playerOne') ||
    (squareSeven == 'playerOne' &&
      squareEight == 'playerOne' &&
      squareNine == 'playerOne')
  ) {
    winner = true;
    whoWon += 'Player One Won!';
    document.querySelector('h2').innerText = `${whoWon}`;
  } else if (
    (squareOne == 'playerTwo' &&
      squareTwo == 'playerTwo' &&
      squareThree == 'playerTwo') ||
    (squareFour == 'playerTwo' &&
      squareFive == 'playerTwo' &&
      squareSix == 'playerTwo') ||
    (squareSeven == 'playerTwo' &&
      squareEight == 'playerTwo' &&
      squareNine == 'playerTwo')
  ) {
    winner = true;
    whoWon += 'Player Two Won!';
    document.querySelector('h2').innerText = `${whoWon}`;
  } else if (
    (squareOne == 'playerOne' &&
      squareFour == 'playerOne' &&
      squareSeven == 'playerOne') ||
    (squareTwo == 'playerOne' &&
      squareFive == 'playerOne' &&
      squareEight == 'playerOne') ||
    (squareThree == 'playerOne' &&
      squareSix == 'playerOne' &&
      squareNine == 'playerOne')
  ) {
    winner = true;
    whoWon += 'Player One Won!';
    document.querySelector('h2').innerText = `${whoWon}`;
  } else if (
    (squareOne == 'playerTwo' &&
      squareFour == 'playerTwo' &&
      squareSeven == 'playerTwo') ||
    (squareTwo == 'playerTwo' &&
      squareFive == 'playerTwo' &&
      squareEight == 'playerTwo') ||
    (squareThree == 'playerTwo' &&
      squareSix == 'playerTwo' &&
      squareNine == 'playerTwo')
  ) {
    winner = true;
    whoWon += 'Player Two Won!';
    document.querySelector('h2').innerText = `${whoWon}`;
  } else if (
    (squareOne == 'playerOne' &&
      squareFive == 'playerOne' &&
      squareNine == 'playerOne') ||
    (squareThree == 'playerOne' &&
      squareFive == 'playerOne' &&
      squareSeven == 'playerOne')
  ) {
    winner = true;
    whoWon += 'Player One Won!';
    document.querySelector('h2').innerText = `${whoWon}`;
  } else if (
    (squareOne == 'playerTwo' &&
      squareFive == 'playerTwo' &&
      squareNine == 'playerTwo') ||
    (squareThree == 'playerTwo' &&
      squareFive == 'playerTwo' &&
      squareSeven == 'playerTwo')
  ) {
    winner = true;
    whoWon += 'Player Two Won!';
    document.querySelector('h2').innerText = `${whoWon}`;
  } else {
    console.log('No Winner Yet');
  }
}

document.querySelector('button').addEventListener('click', playAgain);

function playAgain() {
  squareOne = '';
  squareTwo = '';
  squareThree = '';
  squareFour = '';
  squareFive = '';
  squareSix = '';
  squareSeven = '';
  squareEight = '';
  squareNine = '';
  winner = false;
  whoWon = '';
  document.querySelector('h2').innerText = `${whoWon}`;

  let removeTaken = Array.from(document.querySelectorAll('.taken'));
  removeTaken.forEach((arrayElement, index) => {
    setTimeout(function () {
      removeTaken[index].classList.remove('taken');
      removeTaken[index].classList.add('available');
    }, 20);
  });
  let removePlayerOne = Array.from(document.querySelectorAll('.playerOne'));
  removePlayerOne.forEach((arrayElement, index) => {
    setTimeout(function () {
      removePlayerOne[index].classList.remove('playerOne');
      removePlayerOne[index].classList.add('available');
    }, 20);
  });
  let removePlayerTwo = Array.from(document.querySelectorAll('.playerTwo'));
  removePlayerTwo.forEach((arrayElement, index) => {
    setTimeout(function () {
      removePlayerTwo[index].classList.remove('playerTwo');
      removePlayerTwo[index].classList.add('available');
    }, 20);
  });
  // let addAvailable = Array.from(document.querySelectorAll('.square'))
  // addAvailable.forEach((arrayElement, index) => {
  //     setTimeout(function () {
  //         // console.log(lineItem[index]);
  //         addAvailable[index].classList.add('available')
  //     }, 20);
  // });
}
