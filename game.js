resetButton = document.getElementById('reset');

//creates random array, and places icons on the board
window.onload = resetBoard;

function setPieces() {
    let gamePieces = ["fa fa-anchor", "fa fa-anchor", "fa fa-automobile", "fa fa-automobile", "fa fa-bank", "fa fa-bank", "fa fa-bath", "fa fa-bath", "fa fa-bed", "fa fa-bed", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bug", "fa fa-bug", "fa fa-child", "fa fa-child"];

    let currentRound = [];

    for (i=0; i < 16; i++) {
        let num = Math.floor(Math.random() * gamePieces.length);
        currentRound.push(gamePieces[num]);
        gamePieces.splice(num, 1);
        }
    for (i=0; i<16; i++) {
        let space = document.getElementById("card"+i);
        let setIcon = document.createElement('i');
        space.appendChild(setIcon).setAttribute('class', currentRound[i]);
        setIcon.setAttribute('id','icon'+i);
    }   
}

//removes existing icons when board is reset

function deleteIcons() {
    for (i=0; i<16; i++) {
        let cardNum = document.getElementById('card'+i);
        while (cardNum.hasChildNodes()) {
            cardNum.removeChild(cardNum.firstChild);
        }
    }
}

//combines two functions that allow the board to be reset when button is clicked

function resetBoard() {
    deleteIcons();
    setPieces();
    pickedItem();
}

resetButton.addEventListener('click', resetBoard);

//functionality for clicking on icons

function pickedItem() {
    for (i=0; i < 16; i++) {
        let userChoice = document.getElementById('card'+i);
        let userIcon = document.getElementById('icon'+i);
        let changeColor = function() {
            userChoice.className = 'picked';
            userIcon.classList.add('visible');
            userClicks();
        } 
        userChoice.addEventListener('click',changeColor);
    }
}

//if the class and styles match, trigger event.
function userClicks() {
    let firstPick = document.getElementsByClassName('picked')[0];
    let firstIcon = firstPick.firstChild.getAttribute('class');
    let secondPick = document.getElementsByClassName('picked')[1];
    let secondIcon = secondPick.firstChild.getAttribute('class');
    
    
    if (firstIcon === secondIcon) {
        firstPick.classList.remove('incorrectPick');
        secondPick.classList.remove('incorrectPick');
        firstPick.classList.add('correctPick');
        secondPick.classList.add('correctPick');
        firstPick.classList.remove('picked');
        secondPick.classList.remove('picked');} else {
            let firstIcon = firstPick.firstChild;
            let secondIcon = secondPick.firstChild;
            firstPick.classList.add('incorrectPick');
            secondPick.classList.add('incorrectPick');
            firstPick.classList.remove('picked');
            secondPick.classList.remove('picked');
        };
    setTimeout(removeRedMarker, 2000);
}

function removeRedMarker() {
    let firstIncorrect = document.getElementsByClassName('incorrectPick')[0];
    let secondIncorrect = document.getElementsByClassName('incorrectPick')[1];
    let firstIncorrectIcon = firstIncorrect.firstChild;
    let secondIncorrectIcon = secondIncorrect.firstChild;
    firstIncorrect.classList.remove('incorrectPick');
    secondIncorrect.classList.remove('incorrectPick');
    firstIncorrectIcon.classList.remove('visible');
    secondIncorrectIcon.classList.remove('visible');
}
// firstIcon.style.visibility = 'hidden';
   //         secondIcon.style.visibility = 'hidden';
     //       
       //     

