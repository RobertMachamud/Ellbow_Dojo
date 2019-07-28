import React, {Component} from 'react'
import './SparringProgramm.css'
// import SparringData from './SparringData'
import Display from './Display'



class SparringProgramm extends Component {
  //Data
  state = {
    move: '',
    rounds: 0,
    img: '',
    pause: this.props.pause,
    game: this.props.game,
    gap: 2000,
    running: false
    // ?
    // pause: this.props.pause,
    // game: this.props.game
  }


  // let c = 1
  // // before
  // console.log(`${c}`)
  // // after
  // setInterval(() => {
  //   this.setState({
  //     move: c++
  //   })
  // }, 2000)

  //Functions
  componentWillMount() {
    console.log('sparr_state' ,this.state);
  }

  componentWillReceiveProps(props) {
    this.setState({
      pause: props.pause,
      game: props.game,
    })
  }


  play_round = (round, round_nr, g) => {
    const start = (counter) => {
      console.log('Start 2');
     if (counter < round.length) {
       setTimeout(() => {
         counter++
         this.setState({
           move: `${round[counter - 1].name}`,
           img: `${round[counter - 1].img}`
         })
         start(counter)       // repeat (condition)
       }, this.state.gap)
     }
     if (counter === round.length && round_nr !== g.length) {
       setTimeout( () => {
         console.log('pause')
       }, 1000)
     } else if (counter === round.length && round_nr === g.length) {
       setTimeout( () => {
         console.log('finish')
       }, 4000)
     }
    }
    start(0)
  }

  play = () => {
    console.log('Start')
    // let c = 0
    const st = (c) => {
     if (c < this.props.game.length) {
       setTimeout(() => {
         c++
         this.setState({
           rounds: `${c}`
         })
         this.play_round(this.props.game[c - 1], c, this.props.game)
         setTimeout( () => {
           st(c)   // repeat (condition)
         }, this.props.pause)
       }, c < 1 ? 2000 : (this.props.game[0].length + 1) * this.state.gap)
     }
    }
    st(0)
  }


  startSparring = () => {
    this.setState({ running: true })
    this.play()
  }

  stop = () => {
    this.setState({ running: false })
  }

  // componentWillMount() {
  //   this.startSparring()
  // }

  // (this.props.game[0].length + 1) * this.state.gap



  //Render
  render() {
    return (
      <div className="sparr">

  		<div className="sparr_container">
  			<div className="sparr_data_container">

  			<div className="round">Round: <span className="s_data_span">{this.state.round}</span></div>

    				<div className="sparr_data_box">
              <div className="s_data_bx">
                <div className="s_data_cont">Remaining Rounds:</div>
                <div className="s_data_cont">Remaining Time:</div>
                <div className="s_data_cont">Moves:</div>
              </div>

            <div className="s_data_data_bx">
              <div className="s_data">4</div>
              <div className="s_data">1:00</div>
              <div className="s_data">65</div>
            </div>

  				</div>
          <button className="start">
  					<div onClick={this.startSparring} className="start_p">FIGHT</div>
  				</button>

          <button className="stop">
  					<div onClick={this.stop} className="stop_p">STOP</div>
  				</button>
  			</div>

  			<div className="sparr_disp">
  				<div className="display_moves">
  					<Display move={this.state.move} img={this.state.img} />
  				</div>
  			</div>

  		</div>

  	</div>
    )
  }

}

export default SparringProgramm
