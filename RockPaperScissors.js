const play =(playerchoice)=>{
    let computerAnswer = Math.floor(Math.random() *3)

    let computerChoice = ""

    if (computerAnswer == 0 ) {
        computerChoice = "rock"
        
    } else if (computerAnswer == 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    let result = ""
    
    if (playerchoice == computerChoice ) {
        result = "It's a DRAW!!!🤝🏾"
    } else if (playerchoice == "rock" && computerChoice == "paper") {
        result = "Paper beats Rock, YOU LOSE!!!😢"
    }else if (playerchoice == "paper" && computerChoice == "scissors"){
        result = "Scissors beats Paper, YOU LOSE😢"
    }else if (playerchoice == "scissors" && computerChoice == "rock"){
        result = "Rock beats Scissors, YOU LOSE😢"
    }else{
        result = " YOU WIN!!! 🎊"
    }

    document.querySelector(".result").innerHTML = result;
    document.querySelector(".computerChoice").innerHTML = computerChoice;
    document.querySelector(".playerChoice").innerHTML = playerchoice;
}

