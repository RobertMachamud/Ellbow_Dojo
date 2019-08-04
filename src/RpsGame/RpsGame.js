import React, {Component} from 'react';
import './RpsGame.css'
// import axios from 'axios'



class RpsGame extends Component {

  //Data
  state = {
    rem_rounds: this.props.rounds,
    round: 0
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
