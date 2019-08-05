import React, {Component} from 'react';
import './RpsGame.css'
// import axios from 'axios'



class RpsGame extends Component {

  //Data
  state = {
    rem_rounds: this.props.rounds,
    round: 0,
    rps_moves: ['elbow', 'kneee', 'punch', 'kick', 'block'],
    player_choice: '',
    computer_choice: '',
    player_score: 0,
    computer_score: 0
  }

  //Functions
  componentWillMount() {
    console.log(this.state);
  }


  remRounds = (round) => {
    this.setState({
      rem_rounds: this.props.rounds - this.state.rounds
    })
  }


  random_choice = (rps_moves) => {
    let random_pic = rps_moves[Math.floor(Math.random() * rps_moves.length)]
    this.setState({
      computer_choice: random_pic
    })
  }

// random_choice(choices)
// let compChoice = random_choice(choices)
// console.log(compChoice)

// declare the winner
    declare_winner = (player_choice, computer_choice) => {
    if (player_choice + computer_choice === 'rockscissors' || player_choice + computer_choice === 'paperrock' || player_choice + computer_choice === 'scissorspaper') {
      this.setState({
        player_score: this.player_score + 1
      })
      console.log("You win!")

    } else if (player_choice + computer_choice === 'rockpaper' || player_choice + computer_choice === 'paperscissors' || player_choice + computer_choice === 'scissorsrock') {
      this.setState({
        computer_score: this.computer_score + 1
      })
      console.log("You loose...");

    } else {
      console.log("Draw");
    }
  }

// console.log(declare_winner(playerChoice, compChoice))

  play = () => {
    // this.declare_winner(playerChoice, compChoice)
  }


  game = (rounds) => {
    this.setState({
      rounds: this.state.rounds - 1
    })

   this.play()
   // console.log('Player', player_score)
   // console.log('Comp', computer_score)
 }




  //Render
  render() {
    return (
      <div className="rps_game">

		<div className="rps_slider">

			<div className="rps_red_corner">
				<div className="rps_move"></div>
				<div className="rps_move"></div>
				<div className="rps_move"></div>
				<div className="rps_move"></div>
				<div className="rps_move"></div>
			</div>

			<div className="rps_ring"></div>

			<div className="rps_blue_corner">
				<div className="rps_move">
          <img src="" className="rps_move_img" alt="" />
        </div>

				<div className="rps_move">
          <img src="" className="rps_move_img" alt="" />
        </div>

				<div className="rps_move">
          <img src="" className="rps_move_img" alt="" />
        </div>

				<div className="rps_move">
          <img src="" className="rps_move_img" alt="" />
        </div>

				<div className="rps_move">
          <img src="" className="rps_move_img" alt="" />
        </div>
			</div>



			<div className="rps_score player">
				<span className="rpc_score_score">0</span>
			</div>

			<div className="rps_score comp">
				<span className="rpc_score_score">1</span>
			</div>

		</div>

	</div>

    )
  }

}


export default RpsGame
