/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const randomNumbers = [];
const totalNumbers = 5;
const userNumbers = [];
const rightNumbers = [];
const numContainer = document.querySelector('.num-container');
const userInput = document.getElementsByTagName('input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');


//funzione per generare 5 numeri random tra 1 e 50:
function startGame(){
    let counter = 0;
    while(randomNumbers.length < totalNumbers){
        const generatedNumber = randomNumber(1, 50);
        if(!randomNumbers.includes(generatedNumber)){
            randomNumbers.push(generatedNumber);
            userInput[counter].value = generatedNumber;
            counter++;
        } 
    }
    printNumbers();
}
startGame();

//funzione per stampare i 5 nr random in prima pagina:
function printNumbers(){
    userInput.innerHTML = randomNumbers;
    
    console.log(randomNumbers);
}

//dopo 3 secondi scompaiono e le caselle vengono svuotate:
setTimeout(hideNumbers, 3000);

function emptyInputs(){
    for(let i = 0; i < userInput.length; i++){
        userInput[i].value = '';
    }
}

//funzione per nascondere i numeri random e far apparire le caselle vuote per l'utente:
function hideNumbers(){
    numContainer.innerHTML = '';
    const inputField = document.querySelector('.input-field').classList.add('show');
    checkBtn.classList.remove('d-none');
    checkBtn.classList.add('show');
    emptyInputs();
}

//valutazione degli input inseriti e stampa di messaggio risultato per l'utente:
function checkResult(){
    for(let i = 0; i < userInput.length; i++){
        const userNumber = parseInt(userInput[i].value);
        userNumbers.push(userNumber);
    }
    console.log(userNumbers);

    for(let i = 0; i < userNumbers.length; i++){
        if(randomNumbers.includes(userNumbers[i])){ 
            if(!rightNumbers.includes(userNumbers[i])){
                rightNumbers.push(userNumbers[i]);
            }
        }
    }
    console.log(rightNumbers);

const resultMessage = document.createElement('div');
resultDiv.append(resultMessage);

    // if(randomNumbers.length != rightNumbers.length){
    // resultMessage.innerHTML = "<br>Inserire 5 numeri"    
    // }  

    if(randomNumbers.length == rightNumbers.length){
        resultMessage.innerHTML = "<br>Complimenti! Hai indovinato tutti i numeri!" 
    } 
    else if(rightNumbers.length == 1){
        resultMessage.innerHTML = `<br> Purtroppo hai indovinato un solo numero: ${rightNumbers}. Ritenta! `
    }
    else{
        resultMessage.innerHTML = `<br> Hai indovinato ${rightNumbers.length} numeri ${rightNumbers} `
    }
}

checkBtn.addEventListener('click', checkResult);
