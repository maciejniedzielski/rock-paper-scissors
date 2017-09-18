(function () {
    "use strict";

function Player(name, score){
  this.name = name,
  this.score = score;
}

let player = new Player("Player", 0);
let computer = new Player("Computer", 0);

    let i = 0,
        buttons = document.querySelectorAll("button.weapon__btn");
    for (i; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function () {
            let t0 = performance.now();
            const weapons = ["paper", "rock", "scissors"];
            let  randomNumber = Math.floor(Math.random()*3),
                 computerChoice = weapons[randomNumber],
                 playerChoice = this.value,
                 result = false;

            const playerStats = document.getElementById('playerStats'),
                  computerStats = document.getElementById('computerStats'),
                  playerChoiceBox = document.getElementById('playerChoiceBox'),
                  computerChoiceBox = document.getElementById('computerChoiceBox'),
                  resultText = document.getElementById('result-text');

                  //Getting result of battle |true=win, false=lose|
                   switch(playerChoice){
                     case "paper":
                     {
                         if (computerChoice=="paper"){
                           result=false;
                         } else if (computerChoice=="scissors"){
                           result=false;
                         } else {
                           result=true;
                         }
                         break;
                     }
                     case "rock":
                     {
                         if (computerChoice=="rock"){
                           result=false;
                         } else if (computerChoice=="paper"){
                           result=false;
                         } else {
                           result=true;
                         }
                           break;
                     }
                     case "scissors":
                     {
                         if (computerChoice=="scissors"){
                           result=false;
                         } else if (computerChoice=="rock"){
                           result=false;
                         } else {
                           result=true;
                         }
                           break;
                     }
                   }

                   //Switching choices to HTML elements and displaying it
                   function showChoice(){
                     switch (playerChoice){
                       case "paper": {
                         playerChoice='<i class="fa fa-hand-paper-o" aria-hidden="true">';
                        break;
                       }
                       case "rock": {
                         playerChoice='<i class="fa fa-hand-rock-o" aria-hidden="true">';
                        break;
                       }
                       case "scissors": {
                         playerChoice='<i class="fa fa-hand-scissors-o" aria-hidden="true">';
                        break;
                       }
                     }
                     switch (computerChoice){
                       case "paper": {
                         computerChoice='<i class="fa fa-hand-paper-o" aria-hidden="true">';
                        break;
                       }
                       case "rock": {
                         computerChoice='<i class="fa fa-hand-rock-o" aria-hidden="true">';
                        break;
                       }
                       case "scissors": {
                         computerChoice='<i class="fa fa-hand-scissors-o" aria-hidden="true">';
                        break;
                       }
                     }
                     playerChoiceBox.innerHTML=playerChoice;
                     computerChoiceBox.innerHTML=computerChoice;
                   }

                  function win(){
                    if(playerChoiceBox.classList.contains("lose") || playerChoiceBox.classList.contains("draw")){
                      playerChoiceBox.classList.remove("lose");
                      playerChoiceBox.classList.remove("draw");
                      playerChoiceBox.classList.add("win");
                      computerChoiceBox.classList.remove("win");
                      computerChoiceBox.classList.remove("draw");
                      computerChoiceBox.classList.add("lose");
                    }
                    else{
                      playerChoiceBox.classList.add("win");
                      computerChoiceBox.classList.remove("win");
                      computerChoiceBox.classList.add("lose");
                    }
                  }

                  function lose(){
                    if(playerChoiceBox.classList.contains("win") || playerChoiceBox.classList.contains("draw")){
                      playerChoiceBox.classList.remove("win");
                      playerChoiceBox.classList.remove("draw");
                      playerChoiceBox.classList.add("lose");
                      computerChoiceBox.classList.remove("lose");
                      computerChoiceBox.classList.remove("draw");
                      computerChoiceBox.classList.add("win");
                    }
                    else{
                      playerChoiceBox.classList.add("lose");
                      computerChoiceBox.classList.remove("lose");
                      computerChoiceBox.classList.add("win");
                    }
                  }

                  function draw() {
                      playerChoiceBox.classList.add("draw");
                      computerChoiceBox.classList.add("draw");
                  }

                  //Checking and displaying result of battle
                   if (result) {
                     resultText.innerHTML="You WIN!";
                     player.score+=1;
                     playerStats.innerHTML=player.score;
                     showChoice();
                     win();
                     console.log("You WIN!");
                   }
                   else if(computerChoice == playerChoice){
                     resultText.innerHTML="You DRAW!";
                     showChoice();
                     draw();
                     console.log("You DRAW!");
                   }
                   else {
                     resultText.innerHTML="You LOSE!";
                     computer.score+=1;
                     computerStats.innerHTML=computer.score;
                     showChoice();
                     lose();
                     console.log("You LOSE!");
                   }

                  //Reseting players' points and clearing score
                  function reset(){
                    player.score=0;
                    computer.score=0;
                    playerStats.innerHTML=0;
                    computerStats.innerHTML=0;
                  }

                   if (player.score==5){
                      alert("you win a battle");
                      reset();
                   }
                   else if(computer.score==5){
                      alert("yoyu lose a battle");
                      reset();
                   }

                   let t1 = performance.now();
                   console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
                }, false);


           }
}());
