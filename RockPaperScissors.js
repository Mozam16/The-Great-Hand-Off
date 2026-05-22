const play =(playerchoice, button)=>{
    let emoji = document.createElement("span")
    emoji.innerHTML = playerchoice
    emoji.classList.add("float")
    
    button.appendChild(emoji)



    let computerAnswer = Math.floor(Math.random() *3)

    let computerChoice = ""

    if (computerAnswer == 0 ) {
        computerChoice = "✊"
        
    } else if (computerAnswer == 1) {
        computerChoice = "✋"
    } else {
        computerChoice = "✌"
    }

    let result = ""

    setTimeout(() => {
        
        if (playerchoice == computerChoice ) {
            result = "It's a DRAW!!!🤝🏾"
        } else if (playerchoice == "✊" && computerChoice == "✋") {
            result = "Paper beats Rock, YOU LOSE!!!😢"
        }else if (playerchoice == "✋" && computerChoice == "✌"){
            result = "Scissors beats Paper, YOU LOSE😢"
        }else if (playerchoice == "✌" && computerChoice == "✊"){
            result = "Rock beats Scissors, YOU LOSE😢"
        }else{
            result = " YOU WIN!!! 🎊"
        }

        document.querySelector(".result").innerHTML = result;
    }, 1000);
    


    document.querySelector(".computerChoice").innerHTML = computerChoice;
    document.querySelector(".playerChoice").innerHTML = playerchoice;
}

