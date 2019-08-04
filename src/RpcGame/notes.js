// random choice Computer
const choices = ['rock', 'paper', 'scissors']

const random_choice = (arr) => {
  let random_pic = arr[Math.floor(Math.random() * arr.length)]
  return random_pic
}
// random_choice(choices)
let compChoice = random_choice(choices)
// console.log(compChoice)


let playerChoice = 'paper'


// declare the winner
const declare_winner = (p, c) => {
  if (p + c === 'rockscissors' || p + c === 'paperrock' || p + c === 'scissorspaper') {
    //let player_score += 1
    return "You win!"

  } else if (p + c === 'rockpaper' || p + c === 'paperscissors' || p + c === 'scissorsrock') {
    //computer_score += 1
    return "You loose..."

  } else {
    return "Draw"
  }
}

// console.log(declare_winner(playerChoice, compChoice))



// Shorten to 1 functon
const play = () => {
  let compChoice = random_choice(choices)
  console.log(declare_winner(playerChoice, compChoice))
}



// Play

let rounds = 5

while (rounds > 0) {
  rounds -= 1
  console.log(rounds)
   play()
}



// bug
let player_score = 0
let computer_score = 0

while (player_score < 5 || computer_score < 5) {
   play(player_score)
   console.log('Player', player_score)
   console.log('Comp', computer_score)
}
