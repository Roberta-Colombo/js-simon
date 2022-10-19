/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const randomNumbers = [];
let totalNumbers = 5;
const userNumbers = [];
const numContainer = document.querySelector('.num');
const sendBtn = document.getElementById('invia'); 
const userInput = document.getElementById('user-input');



function addNumbers(){
    while(randomNumbers.length < totalNumbers){
        const generatedNumber = randomNumber(1, totalNumbers);
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
    const inputField = document.querySelector('.input-field').classList.add('show-input-field');
}

function collectUserNumbers(){
    // const userNumber = document.getElementById('user-input').value;
    for(let i = 0; i < totalNumbers; i++){
        const userNumber = document.getElementById('user-input').value; 
        userNumbers.push(userNumber);
    }
    
}
   

collectUserNumbers();
console.log(userNumbers);

sendBtn.addEventListener('click', collectUserNumbers);

