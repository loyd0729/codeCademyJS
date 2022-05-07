const getUserChoice = userInput => {
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      return 'not an option'
    }
  }
  
  const getComputerChoice = () => {
    number = Math.floor(Math.random() * 4);
    if(number === 0) {
      return 'rock';
    } else if(number === 1) {
      return 'paper';
    } else if(number === 2) {
      return 'scissors';
    } else if(number === 3) {
      return 'bomb';
    } else {
      return 'nada';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return 'The game was a tie.';
    }
  
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'computer won!';
      } else {
        return 'the user won!';
      }
    }
  
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors') {
        return 'computer won';
      } else {
        if(computerChoice === 'rock') {
          return 'user won';
        }
      }
    }
  
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'computer won';
      } else {
        if(computerChoice === 'paper') {
          return 'user won';
        }
      }
    }
  
    if(userChoice === 'bomb') {
     if(computerChoice === 'rock') {
       return 'instant winner';
     } else {
       if(computerChoice === 'paper') {
         return 'instant winner';
       }
     }
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    let answer =  determineWinner(userChoice, computerChoice);
    return answer;
  }
  
  console.log(playGame());
  
  
  
  
  