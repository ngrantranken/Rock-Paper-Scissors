const $ = selector => document.querySelector(selector);

const userImg = document.createElement('img');
const compImg = document.createElement('img');
const rounds = $('#round-counter');
const userChoice = $('#user-choice');
const compChoice = $('#comp-choice');
const userScore = $('#user-score');
const compScore = $('#comp-score');
const playButton = $('#play');
let roundCount = 1;
let plusUser = 0;
let plusComp = 0;
const choices = ['rock', 'paper', 'scissors'];
const imageSources = ['images/rock.png', 'images/paper.png', 'images/scissors.png'];

function generateCompChoice() {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 33) {
        compChoice.value = choices[0];
    } else if (randomNumber > 66 ) {
        compChoice.value = choices[1];
    } else if (randomNumber >= 33 && randomNumber <=66) {
        compChoice.value = choices[2];
    }
}

function resolveRound() {
    // user input validation
    if (userChoice.value.toLowerCase() === choices[0] || userChoice.value.toLowerCase() === choices[1] || userChoice.value.toLowerCase() === choices[2]) {
        generateCompChoice();
        // tie
        if (userChoice.value.toLowerCase() === compChoice.value.toLowerCase()) {
            roundCount++;
            rounds.innerText = roundCount;
        } else
        // rock
        if (userChoice.value.toLowerCase() === choices[0]) {
            if (compChoice.value.toLowerCase() === choices[2]) {
                roundCount++;
                plusUser++;
                rounds.innerText = roundCount;
                userScore.innerText = plusUser;
            } else {
                roundCount++;
                plusComp++;
                rounds.innerText = roundCount;
                compScore.innerText = plusComp;
            }
        } else
        // paper
        if (userChoice.value.toLowerCase() === choices[1]) {
            if (compChoice.value.toLowerCase() === choices[0]){
                roundCount++;
                plusUser++;
                rounds.innerText = roundCount;
                userScore.innerText = plusUser;
            } else {
                roundCount++;
                plusComp++;
                rounds.innerText = roundCount;
                compScore.innerText = plusComp;
            }
        } else
        // scissors
        if (userChoice.value.toLowerCase() === choices[2]) {
            if (compChoice.value.toLowerCase() === choices[1]) {
                roundCount++;
                plusUser++;
                rounds.innerText = roundCount;
                userScore.innerText = plusUser;
            } else {
                roundCount++;
                plusComp++;
                rounds.innerText = roundCount;
                compScore.innerText = plusComp;
            }
        }
    } else {
        alert('Please enter Rock, Paper, or Scissors');
    }
}

function addUserImage() {
    switch (userChoice.value.toLowerCase()) {
        case 'rock':
            $('#user-img-div').appendChild(userImg).src = imageSources[0];
            userImg.classList.add('img-fluid');
            userImg.setAttribute('id', 'user-img');
            userImg.setAttribute('alt', choices[0]);
            break;
        case 'paper':
            $('#user-img-div').appendChild(userImg).src = imageSources[1];
            userImg.classList.add('img-fluid');
            userImg.setAttribute('id', 'user-img');
            userImg.setAttribute('alt', choices[1]);
            break;
        case 'scissors':
            $('#user-img-div').appendChild(userImg).src = imageSources[2];
            userImg.classList.add('img-fluid');
            userImg.setAttribute('id', 'user-img');
            userImg.setAttribute('alt', choices[2]);
            break;
    }
}
function addCompImage() {
    switch (compChoice.value.toLowerCase()) {
        case 'rock':
            $('#comp-img-div').appendChild(compImg).src = imageSources[0];
            compImg.classList.add('img-fluid');
            compImg.setAttribute('id', 'comp-img');
            compImg.setAttribute('alt', choices[0]);
            break;
        case 'paper':
            $('#comp-img-div').appendChild(compImg).src = imageSources[1];
            compImg.classList.add('img-fluid');
            compImg.setAttribute('id', 'comp-img');
            compImg.setAttribute('alt', choices[1]);
            break;
        case 'scissors':
            $('#comp-img-div').appendChild(compImg).src = imageSources[2];
            compImg.classList.add('img-fluid');
            compImg.setAttribute('id', 'comp-img');
            compImg.setAttribute('alt', choices[2]);
            break;
    }
}

playButton.addEventListener('click', (event) => {
    playButton.disabled = true;
    userChoice.readOnly = true;
    resolveRound();
    addUserImage();
    addCompImage();
    setTimeout( () => {
    userChoice.value = "";
    compChoice.value = "";
    userChoice.readOnly = false;
    playButton.disabled = false;
    userImg.remove();
    compImg.remove();
    userChoice.focus();
    }, 5000
    );
});