let content = document.querySelector('.content');
let buttons = document.querySelectorAll('.a');
let btnFirst = document.querySelector('.first');
let btnSecond = document.querySelector('.second')
let btnThird = document.querySelector('.third')
let buttonsAll = document.querySelector('.butonSection');
let btnSubmit = document.querySelector('.btnCheck')
let btnNext = document.querySelector('.Next')
let display = document.querySelector('.display');
let arr = [];
let numOfGreenDinos;
let userAnswer;

function newPic(){
    let image = document.createElement('img');
    let randomNum = Math.floor(Math.random()*4)+1;
    image.src=`./img/image${randomNum}.png`;   // to import random SOURCE image
    // image.style.width = "90px";
    image.classList.add("my_class")
    content.appendChild(image);
    arr.push(randomNum);
}
///Reapeat pics
function times(repeatTimes){
   for(let i=0; i<repeatTimes;i++){
       newPic();
   }
}
times(5)

///Figure out how many green dinos in array
let newArr = arr.filter((index)=>{
    return index===4;
})
numOfGreenDinos = newArr.length;

/// Create new array with right answer
let arrButtons = [];
arrButtons.push(numOfGreenDinos);
arrButtons.push(numOfGreenDinos+1);
arrButtons.push(numOfGreenDinos+2)
console.log(arrButtons);

///Change order in array
function changeOrder(array){
    for(let i = array.length-1; i>0;i--){
        let myRan = Math.floor(Math.random()*(i+1));
        let temp = array[i];
        array[i] = array[myRan];
        array[myRan] = temp;
    }
}

changeOrder(arrButtons);
btnFirst.innerHTML = arrButtons[0];
btnSecond.innerHTML = arrButtons[1];
btnThird.innerHTML = arrButtons[2];

let clicked = 0
//////////// CheckAnswer and Compare it
buttonsAll.addEventListener('click',(e)=>{
    if(e.target.classList.contains('a')){
        e.target.style.backgroundColor = 'rgb(93, 148, 136)';
        userAnswer = parseInt(e.target.innerHTML);
        clicked++
        if(clicked>1){
            refreshPage()
        }
    } 
})

btnSubmit.addEventListener('click',()=>{
    checkAnswer(numOfGreenDinos,userAnswer);
})

function checkAnswer (rightAnswer,userChoise){
    if(rightAnswer===userChoise){
        display.style.color = 'Green';
        display.innerHTML = 'Yep,you are right!!!';
    } else{
        display.style.color = 'red';
        display.innerHTML = 'WRONG!!!Try again';
    }
}

function refreshPage(){
    window.location.reload();
} 

btnNext.addEventListener('click',()=>{
    refreshPage();
})












