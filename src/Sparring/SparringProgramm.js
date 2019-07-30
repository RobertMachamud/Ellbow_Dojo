import React, {Component} from 'react'
import './SparringProgramm.css'
// import SparringData from './SparringData'
import Display from './Display'
import ReactCountdownClock from 'react-countdown-clock'



class SparringProgramm extends Component {
  //Data
  state = {
    running: false,
    move: '',
    img: '',
    game: this.props.game,
    rounds: this.props.rounds,
    duration: this.props.duration,
    pause: this.props.pause,
    paused: true,
    gap: 2000,
    timer: 0
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
      game: props.game
    })
  }


  onComplete = () => {
    this.setState({ timer: this.state.timer + 1 })
  }

  // onComplete = () => {
  //   this.setState({ timer: this.state.timer + 1 },
  //     () => console.log(this.state.timer)
  //   )
  // }

  play_round = (round, round_nr, g) => {
    const start = (counter) => {
      console.log('Start 2');
      this.setState({
        paused: false,
        duration: this.state.duration // + 0.0000000001
      })
     if (counter < round.length) {
       setTimeout(() => {
         counter++
         //
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
         this.setState({
           img: 'https://res.cloudinary.com/dxcrd5sos/image/upload/v1564463719/o1JXDjmW_400x400_kpmjlo.jpg',
           move: '',
           duration: this.state.pause + 0.0000000001
         })
         console.log(this.state.duration);
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
         // this.setState({
         //   paused: false,
         //   duration: this.state.duration
         // })
         c++
         this.setState({
           rounds: `${c}`
         })
         // this.setState({
         //   duration: this.props.duration + 0.0000000001
         // })
         this.play_round(this.props.game[c - 1], c, this.props.game)
         setTimeout( () => {
           st(c)   // repeat (condition)
         }, (this.props.pause * 60) * 1000)
       }, c < 1 ? 2000 : (this.props.game[0].length + 1) * this.state.gap)
     }
    }
    st(0)
  }


  startSparring = () => {
    this.setState({ running: true })
    this.play()
  }

  stopSparr = () => {
    this.setState({ running: false })
  }

  // resetTimer = () => {
  //
  // }

  // componentWillMount() {
  //   this.startSparring()
  // }

  // (this.props.game[0].length + 1) * this.state.gap


  // <ReactCountdownClock seconds={this.state.duration}
  //                color="#ff4b1f"
  //                alpha={0.9}
  //                size={200}
  //                weight={20}
  //                fontSize="2em"
  //                font={"sans-serif"}
  //                 />


  // <div className="s_data">4</div>
  // <div className="s_data">1:00</div>
  // <div className="s_data">65</div>

  // backSparrSelect


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
              </div>

            <div className="s_data_data_bx">
            <ReactCountdownClock seconds={this.state.duration * 60}
                           color="#ff4b1f"
                           showMilliseconds={false}
                           alpha={0.9}
                           size={200}
                           weight={20}
                           fontSize="2em"
                           font={"sans-serif"}
                           paused={this.state.paused}
                           onComplete={this.onComplete}
                            />
            </div>

  				</div>
          <button className="start">
  					<div onClick={this.startSparring} className="start_p">FIGHT</div>
  				</button>

          <button className="stop">
  					<div onClick={this.stopSparr} className="stop_p">STOP</div>
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
