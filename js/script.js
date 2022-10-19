/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const randomNumbers = [];
const totalNumbers = 5;
const userNumbers = [];
const numContainer = document.querySelector('.num');
const sendBtn = document.getElementById('invia'); 
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const errorLength = document.createElement('div');
resultDiv.append(errorLength);



function addNumbers(){
    while(randomNumbers.length < totalNumbers){
        const generatedNumber = randomNumber(1, 10);
        if(!randomNumbers.includes(generatedNumber)){
            randomNumbers.push(generatedNumber);
        } 
    }
    printNumbers();
}
addNumbers();

console.log(randomNumbers);

function printNumbers(){
    numContainer.innerHTML = "<h4>Memorizza i seguenti numeri:</h4> " + randomNumbers;
}

setTimeout(hideNumbers, 3000);

function hideNumbers(){
    numContainer.innerHTML = '';
    const inputField = document.querySelector('.input-field').classList.add('show');
    checkBtn.classList.remove('d-none');
    checkBtn.classList.add('show');
}

function collectUserNumbers(){
    let userNumber = document.getElementById('user-input').value;    
    userNumbers.push(userNumber);
    console.log(userNumbers);
    if(userNumbers.length == totalNumbers){
        const userChoice = document.createElement('div');
        const userChoiceDiv = document.getElementById('user-choice-div');
        userChoiceDiv.append(userChoice);
        userChoice.innerHTML = `
        I numeri da te scelti sono: ${userNumbers}
        `;
    }
}

sendBtn.addEventListener('click', collectUserNumbers);

function getMatch() {
    const matches = [];
    for (let i = 0; i < randomNumbers.length; i++ ){
        for (let x = 0; x < userNumbers.length; x++){
            if (randomNumbers[i] === userNumbers[x]){
                matches.push(randomNumbers[i]);
            }     
        }
    }
    console.log(matches); 
    return matches;    
}


function compareArrays(){
    if(randomNumbers.length != userNumbers.length){
        errorLength.innerHTML = "Inserire 5 numeri";       
    }
    else{
        getMatch();
    }
}    

checkBtn.addEventListener('click', compareArrays);