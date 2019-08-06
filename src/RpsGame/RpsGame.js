import React, {Component} from 'react';
import './RpsGame.css'
// import axios from 'axios'



class RpsGame extends Component {
  //Data
  state = {
    rem_rounds: this.props.rounds,
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


  // Round Countdown
  remRounds = (round) => {
    this.setState({
      rem_rounds: this.props.rounds - this.state.rounds
    })
  }


  // Computer Choice - Random
  random_choice = (rps_moves) => {
    let random_pic = rps_moves[Math.floor(Math.random() * rps_moves.length)]
    this.setState({
      computer_choice: random_pic
    })
  }


    // declare the winner
    declareWinner = (player_choice, computer_choice) => {
      this.random_choice(this.state.rps_moves)
      if ((player_choice ==='elbow' && computer_choice === 'punch') ||
          (player_choice ==='elbow' && computer_choice === 'block') ||
          (player_choice ==='punch' && computer_choice === 'block') ||
          (player_choice ==='punch' && computer_choice === 'knee') ||
          (player_choice ==='kick' && computer_choice === 'elbow') ||
          (player_choice ==='kick' && computer_choice === 'punch') ||
          (player_choice ==='block' && computer_choice === 'kick') ||
          (player_choice ==='block' && computer_choice === 'knee') ||
          (player_choice ==='knee' && computer_choice === 'elbow') ||
          (player_choice ==='knee' && computer_choice === 'kick')) {
        this.setState({
            player_score: this.player_score + 1
          })
          console.log("You win!")

      } else if ((player_choice ==='elbow' && computer_choice === 'kick') ||
                 (player_choice ==='elbow' && computer_choice === 'knee') ||
                 (player_choice ==='punch' && computer_choice === 'elbow') ||
                 (player_choice ==='punch' && computer_choice === 'kick') ||
                 (player_choice ==='kick' && computer_choice === 'block') ||
                 (player_choice ==='kick' && computer_choice === 'knee') ||
                 (player_choice ==='block' && computer_choice === 'elbow') ||
                 (player_choice ==='block' && computer_choice === 'punch') ||
                 (player_choice ==='knee' && computer_choice === 'punch') ||
                 (player_choice ==='knee' && computer_choice === 'block')) {
          this.setState({
            computer_score: this.computer_score + 1
          })
          console.log("You loose...")

      } else {
        console.log("Draw")
    }
  }




  play = () => {
    console.log('SCORE', this.state);
    this.declare_winner(this.state.player_choice, this.state.computer_choice)
  }


  game = (rounds) => {
    this.setState({
      rounds: this.state.rounds - 1
    })

   this.play()
   // console.log('Player', player_score)
   // console.log('Comp', computer_score)
 }




  // Choosing your move
  chooseElbow = () => {
    console.log(this.state);
    this.setState({
      player_choice: 'ellbow'
    })
    this.play()
  }

  choosePunch = () => {
    this.setState({
      player_choice: 'punch'
    })
    console.log(this.state);
    this.play()
  }

  chooseBlock = () => {

    this.setState({
      player_choice: 'block'
    })
    console.log(this.state);
    this.play()
  }

  chooseKick = () => {

    this.setState({
      player_choice: 'kick'
    })
    console.log(this.state);
    this.play()
  }

  chooseKnee = () => {
    console.log(this.state);
    this.setState({
      player_choice: 'knee'
    })
    this.play()
  }



  //Render
  render() {
    return (
      <div className="rps_game">

		<div className="rps_slider">

			<div className="rps_red_corner">
        <div className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_5_mo2p1q.jpg" className="rps_move_img_comp" alt="" />
        </div>

				<div className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_2_vm2uip.jpg" className="rps_move_img_comp" alt="" />
        </div>

				<div className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_3_dgdy1k.jpg" className="rps_move_img_comp" alt="" />
        </div>

				<div className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_4_u04wka.jpg" className="rps_move_img_comp" alt="" />
        </div>

				<div className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_6_ezpvnr.jpg" className="rps_move_img_comp" alt="" />
        </div>
			</div>



			<div className="rps_ring"></div>

    

			<div onClick={this.chooseKick} className="rps_blue_corner">
				<div className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_5_mo2p1q.jpg" className="rps_move_img" alt="" />
        </div>

				<div onClick={this.chooseBlock} className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_2_vm2uip.jpg" className="rps_move_img" alt="" />
        </div>

				<div onClick={this.choosePunch} className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_3_dgdy1k.jpg" className="rps_move_img" alt="" />
        </div>

				<div onClick={this.chooseKnee} className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_4_u04wka.jpg" className="rps_move_img" alt="" />
        </div>

				<div onClick={() => {this.chooseElbow(); this.play()}} className="rps_move">
          <img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1565020246/muay_thai_silhouette-01_Kopie_6_ezpvnr.jpg" className="rps_move_img" alt="" />
        </div>
			</div>



			<div className="rps_score player">
				<span className="rpc_score_score">{this.state.player_score}</span>
			</div>

			<div className="rps_score comp">
				<span className="rpc_score_score">{this.state.computer_score}</span>
			</div>




      <div className="rps_move player_pos">
        <img src={this.state.player_choice} className="rps_move_img" alt="" />
      </div>

      <div className="rps_move comp_pos">
        <img src={this.state.computer_choice} className="rps_move_img" alt="" />
      </div>

		</div>

	</div>

    )
  }

}


export default RpsGame
