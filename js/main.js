
let player1 = true
let player2 = false
let squareOne = ''
let squareTwo = ''
let squareThree = ''
let squareFour = ''
let squareFive = ''
let squareSix = ''
let squareSeven = ''
let squareEight = ''
let squareNine = ''


document.getElementById('s1').addEventListener('click', function (event) {
    if (event.target.classList.contains('taken')) {
        return alert("spot taken")
    }
    if (event.target.classList.contains('available') && player1 === true) {
        event.target.classList.remove('available')
        event.target.classList.add('playerOne')
        event.target.classList.add('taken')
        player1 = false
        player2 = true
        squareOne = "playerOne"
        checkWin()
    }
    else {
        event.target.classList.add('playerTwo')
        event.target.classList.add('taken')
        player1 = true
        player2 = false
        squareOne = "playerTwo"
        checkWin()
    }
})

document.getElementById('s2').addEventListener('click', function (event) {
    if (event.target.classList.contains('taken')) {
        return alert("spot taken")
    }
    if (event.target.classList.contains('available') && player1 === true) {
        event.target.classList.remove('available')
        event.target.classList.add('playerOne')
        event.target.classList.add('taken')
        player1 = false
        player2 = true
        squareTwo = "playerOne"
        checkWin()
    }
    else {
        event.target.classList.add('playerTwo')
        event.target.classList.add('taken')
        player1 = true
        player2 = false
        squareTwo = "playerTwo"
    }
})
document.getElementById('s3').addEventListener('click', function (event) {
    if (event.target.classList.contains('taken')) {
        return alert("spot taken")
    }
    if (event.target.classList.contains('available') && player1 === true) {
        event.target.classList.remove('available')
        event.target.classList.add('playerOne')
        event.target.classList.add('taken')
        player1 = false
        player2 = true
        squareThree = "playerOne"
        checkWin()
    }
    else {
        event.target.classList.add('playerTwo')
        event.target.classList.add('taken')
        player1 = true
        player2 = false
        squareThree = "playerTwo"
        checkWin()
    }
})
document.getElementById('s4').addEventListener('click', function (event) {
    if (event.target.classList.contains('taken')) {
        return alert("spot taken")
    }
    if (event.target.classList.contains('available') && player1 === true) {
        event.target.classList.remove('available')
        event.target.classList.add('playerOne')
        event.target.classList.add('taken')
        player1 = false
        player2 = true
        squareFour = "playerOne"
        checkWin()
    }
    else {
        event.target.classList.add('playerTwo')
        event.target.classList.add('taken')
        player1 = true
        player2 = false
        squareFour = "playerTwo"
        checkWin()
    }
})
document.getElementById('s5').addEventListener('click', function (event) {
    if (event.target.classList.contains('taken')) {
        return alert("spot taken")
    }
    if (event.target.classList.contains('available') && player1 === true) {
        event.target.classList.remove('available')
        event.target.classList.add('playerOne')
        event.target.classList.add('taken')
        player1 = false
        player2 = true
        squareFive = "playerOne"
        checkWin()
    }
    else {
        event.target.classList.add('playerTwo')
        event.target.classList.add('taken')
        player1 = true
        player2 = false
        squareFive = "playerTwo"
        checkWin()
    }
})
document.getElementById('s6').addEventListener('click', function (event) {
    if (event.target.classList.contains('taken')) {
        return alert("spot taken")
    }
    if (event.target.classList.contains('available') && player1 === true) {
        event.target.classList.remove('available')
        event.target.classList.add('playerOne')
        event.target.classList.add('taken')
        player1 = false
        player2 = true
        squareSix = "playerOne"
        checkWin()
    }
    else {
        event.target.classList.add('playerTwo')
        event.target.classList.add('taken')
        player1 = true
        player2 = false
        squareSix = "playerTwo"
        checkWin()
    }
})
document.getElementById('s7').addEventListener('click', function (event) {
    if (event.target.classList.contains('taken')) {
        return alert("spot taken")
    }
    if (event.target.classList.contains('available') && player1 === true) {
        event.target.classList.remove('available')
        event.target.classList.add('playerOne')
        event.target.classList.add('taken')
        player1 = false
        player2 = true
        squareSeven = "playerOne"
        checkWin()
    }
    else {
        event.target.classList.add('playerTwo')
        event.target.classList.add('taken')
        player1 = true
        player2 = false
        squareSeven = "playerTwo"
        checkWin()
    }
})
document.getElementById('s8').addEventListener('click', function (event) {
    if (event.target.classList.contains('taken')) {
        return alert("spot taken")
    }
    if (event.target.classList.contains('available') && player1 === true) {
        event.target.classList.remove('available')
        event.target.classList.add('playerOne')
        event.target.classList.add('taken')
        player1 = false
        player2 = true
        squareEight = "playerOne"
        checkWin()
    }
    else {
        event.target.classList.add('playerTwo')
        event.target.classList.add('taken')
        player1 = true
        player2 = false
        squareEight = "playerTwo"
        checkWin()
    }
})
document.getElementById('s9').addEventListener('click', function (event) {
    if (event.target.classList.contains('taken')) {
        return alert("spot taken")
    }
    if (event.target.classList.contains('available') && player1 === true) {
        event.target.classList.remove('available')
        event.target.classList.add('playerOne')
        event.target.classList.add('taken')
        player1 = false
        player2 = true
        squareNine = "playerOne"
        checkWin()
    }
    else {
        event.target.classList.add('playerTwo')
        event.target.classList.add('taken')
        player1 = true
        player2 = false
        squareNine = "playerTwo"
        checkWin()
    }
})


function checkWin() {
    console.log("im checking")
    if ((squareOne == "playerOne" && squareTwo == "playerOne" && squareThree == "playerOne") || (squareOne == "playerTwo" && squareTwo == "playerTwo" && squareThree == "playerTwo") || (squareFour == "playerOne" && squareFive == "playerOne" && squareSix == "playerOne") || (squareFour == "playerTwo" && squareFive == "playerTwo" && squareSix == "playerTwo") || (squareSeven == "playerOne" && squareEight == "playerOne" && squareNine == "playerOne") || (squareSeven == "playerTwo" && squareEight == "playerTwo" && squareNine == "playerTwo")) {
        alert("winner")
    } else if ((squareOne == "playerOne" && squareFour == "playerOne" && squareSeven == "playerOne") || (squareOne == "playerTwo" && squareFour == "playerTwo" && squareSeven == "playerTwo") || (squareTwo == "playerOne" && squareFive == "playerOne" && squareEight == "playerOne") || (squareTwo == "playerTwo" && squareFive == "playerTwo" && squareEight == "playerTwo") || (squareThree == "playerOne" && squareSix == "playerOne" && squareNine == "playerOne") || (squareThree == "playerTwo" && squareSix == "playerTwo" && squareNine == "playerTwo")) {
        alert("winner")
    } else if ((squareOne == "playerOne" && squareFive == "playerOne" && squareNine == "playerOne") || (squareOne == "playerTwo" && squareFive == "playerTwo" && squareNine == "playerTwo") || (squareThree == "playerOne" && squareFive == "playerOne" && squareSeven == "playerOne") || (squareThree == "playerTwo" && squareFive == "playerTwo" && squareSeven == "playerTwo")) {
        console.log("winner")
    } else {
        console.log("No Winner Yet")
    }

}