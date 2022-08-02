'use strict';
let message=document.querySelector('.message').textContent
let number=document.querySelector('.number').textContent
let Score=document.querySelector('.score').textContent
let guess=document.querySelector('.guess').value
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}


let secretNumber=Math.trunc(Math.random()*21)
let score=20

//   document.querySelector('.number').textContent=secretNumber

document.querySelector('.check').addEventListener('click',function(){
   let guess=Number(document.querySelector('.guess').value)
    if(!guess){
        displayMessage('⛔ No Number!' ) 
    }else if(guess===secretNumber){
        displayMessage('🎉 Correct Number!')
        
        document.querySelector('.number').textContent=secretNumber

        let current=document.querySelector('.score').textContent
        let previous=document.querySelector('.highscore').textContent
        console.log(current,'current')
        
       if(current>previous){
        
        document.querySelector('.highscore').textContent=current
console.log(previous,'previous')
}
    document.querySelector('body').style.backgroundColor='green'
    document.querySelector('.number').style.width='30rem'
    }else if(score>1){
        displayMessage(guess>secretNumber?'📈 Too High':'📉 Too Low')
 
        score--;
        document.querySelector('.score').textContent=score

}else{
    displayMessage('👎🏻 You lost the game!')
    document.querySelector('body').style.backgroundColor='red'
}
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*21)
    score=20 
    displayMessage('Start guessing ...')
    document.querySelector('.score').textContent=score
    document.querySelector('.number').textContent='?'
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor='black'
    document.querySelector('.number').style.width='8rem'
})

