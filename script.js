
//GLOBAL VARIABLES OF FUNCTIONS 
var timer = 30;
var score = 0 ;
var randomHit ;

//FUNCTION TO CREATE A BUBBLE 
function MakeBubble (){
    let bubbles = `` ;
    for( let i = 1 ; i<=150 ; i++){
        let rn = Math.round(Math.random()*10);
        bubbles += `<div class="Bubble">${rn}</div> `;
}
    document.querySelector('.bottom-pannel').innerHTML = bubbles;
}

//FUNCTION TO RUN A TIMER FROM 60 SEC TO 0 SEC
function runTimer (){

   var timeRunner = setInterval(function (){
    if(timer > 0 ){
        timer-- ;   
        document.querySelector('#timeVal').textContent = timer;
    }else{
        clearInterval(timeRunner);
        document.querySelector(".bottom-pannel").innerHTML = `<h1 class = " gameOver ">Game Over </h1> <h1 class = "finalScore"> Your Final score is : ${score} </h1>` 
    }
    }, 1000);
}

//FUNCTION FOR GENERATE RANDOM HIT VALUE 
function hitVal (){
    randomHit = Math.round(Math.random()*10);
    document.querySelector('#hit').textContent = randomHit ;
}

function increaseScore (){     
    score += 10;              
    document.querySelector('#score').textContent = score ;
    
}

document.querySelector('.bottom-pannel').addEventListener('click' , function(event){
    console.log(Number(event.target.textContent));
   let bubbleNum = Number(event.target.textContent);
   if(bubbleNum === randomHit ){
    increaseScore()
    hitVal()
    MakeBubble()
   }
})

function startGame(){
  
    document.querySelector(".startBTN").addEventListener("click" , function(){
    runTimer()
  })
}

function newGame(){
    document.querySelector(".newBTN").addEventListener("click" , function(){
        runTimer()
    })
}

//CALLING FUNCTIONS 

startGame();
MakeBubble();
hitVal()
