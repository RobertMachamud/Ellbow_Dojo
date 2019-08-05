// import React, {Component} from 'react';
// import './RpsGame.css'
// // import axios from 'axios'
//
//
//
// class RpsGame extends Component {
//
//   //Data
//   state = {
//     rem_rounds: this.props.rounds,
//     round: 0,
//     rps_moves: [],
//     player_score: 0,
//     computer_score: 0
//   }
//
//   //Functions
//   componentWillMount() {
//     console.log(this.state);
//   }
//
//
//   remRounds = (round) => {
//     this.setState({
//       rem_rounds: this.props.rounds - this.state.rounds
//     })
//   }
//
//
//   random_choice = (rps_moves) => {
//     let comp_move = arr[Math.floor(Math.random() * comp_move.length)]
//     return random_pic
//   }
//
//
// const choices = ['rock', 'paper', 'scissors']
//
// const random_choice = (arr) => {
//   let random_pic = arr[Math.floor(Math.random() * arr.length)]
//   return random_pic
// }
// // random_choice(choices)
// let compChoice = random_choice(choices)
// // console.log(compChoice)
//
//
// let playerChoice = 'paper'
//
//
// // declare the winner
// const declare_winner = (p, c) => {
//   if (p + c === 'rockscissors' || p + c === 'paperrock' || p + c === 'scissorspaper') {
//     player_score += 1
//     return "You win!"
//
//   } else if (p + c === 'rockpaper' || p + c === 'paperscissors' || p + c === 'scissorsrock') {
//     computer_score += 1
//     return "You loose..."
//
//   } else {
//     return "Draw"
//   }
// }
//
// // console.log(declare_winner(playerChoice, compChoice))
//
// const play = () => {
//   let compChoice = random_choice(choices)
//   console.log(declare_winner(playerChoice, compChoice))
// }
//
//
// let rounds = 5
// let player_score = 0
// let computer_score = 0
//
//
//
// const game = (score) => {
//   while (score < 0) {
//     score - 1
//    play()
//    console.log('Player', player_score)
//    console.log('Comp', computer_score)
// }
// }
//
//
//
//   //Render
//   render() {
//     return (
//       <div className="rps_game">
//
// 		<div className="rps_slider">
//
// 			<div className="rps_red_corner">
// 				<div className="rps_move"></div>
// 				<div className="rps_move"></div>
// 				<div className="rps_move"></div>
// 				<div className="rps_move"></div>
// 				<div className="rps_move"></div>
// 			</div>
//
// 			<div className="rps_ring"></div>
//
// 			<div className="rps_blue_corner">
// 				<div className="rps_move">
//           <img src="" className="rps_move_img" alt="" />
//         </div>
//
// 				<div className="rps_move">
//           <img src="" className="rps_move_img" alt="" />
//         </div>
//
// 				<div className="rps_move">
//           <img src="" className="rps_move_img" alt="" />
//         </div>
//
// 				<div className="rps_move">
//           <img src="" className="rps_move_img" alt="" />
//         </div>
//
// 				<div className="rps_move">
//           <img src="" className="rps_move_img" alt="" />
//         </div>
// 			</div>
//
//
//
// 			<div className="rps_score player">
// 				<span className="rpc_score_score">0</span>
// 			</div>
//
// 			<div className="rps_score comp">
// 				<span className="rpc_score_score">1</span>
// 			</div>
//
// 		</div>
//
// 	</div>
//
//     )
//   }
//
// }
//
//
// export default RpsGame
