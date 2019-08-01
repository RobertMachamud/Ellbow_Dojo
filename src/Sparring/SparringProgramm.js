import React, {Component} from 'react'
import './SparringProgramm.css'
import axios from 'axios'
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


  // addToProfile = (rounds_game, moves_game) => {
  //   let total_rounds_game = rounds_game
  //   let total_moves_game = moves_game
  // }


  onComplete = () => {
    this.setState({ timer: this.state.timer + 1 })
  }


  changeData = (e) => {
    e.preventDefault()
    axios.patch('http://localhost:5000/api/profile', this.state,
    {headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }}).then( (res) => {
          console.log('FE REES-DATA' ,res);
          this.setState({
            f_name: res.data.f_name,
            l_name: res.data.l_name,
            gender: res.data.age,
            age: res.data.f_name,
            height: res.data.height,
            weight: res.data.weight
          })
        })
  }


  // params -> counters
  updateTotals = (rounds, moves) => {
    axios.patch('http://localhost:5000/api/profile', {
      total_rounds: this.state.user.total_rounds + rounds,
      total_moves: this.state.user.total_moves + moves
    },
    {headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }}).then( (res) => {
          this.State({
            total_rounds: res.data.total_rounds,
            total_moves: res.data.total_moves
          })
        })
  }




  play_round = (round, round_nr, g) => {
    const start = (counter) => {
      console.log('Start 2');
     if (counter < round.length) {
       setTimeout(() => {
         counter++
         this.setState({
           paused: false,
           duration: this.props.duration
         })
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
           console.log('finish condition!');
           this.updateTotals(this.props.game.length, (this.props.game[0].length * this.props.game.length))
           // this.updateTotals(round_nr, (counter * round_nr))
           this.setState({
             running: false,
             img: 'https://res.cloudinary.com/dxcrd5sos/image/upload/v1564466474/9599865-cartoon-character-exhausted-on-finish-line_mutod6.jpg',
             move: ''
           })
       }, 4000)
     }
    }
    start(0)
  }

  play = () => {
    console.log('Start')
    this.setState({
      img: 'https://res.cloudinary.com/dxcrd5sos/image/upload/v1564467591/start_k7rg2m.png',
      move: '',
      running: true
    })
    const st = (c) => {
     if (c < this.props.game.length) {
       setTimeout(() => {
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
                           onComplete={this.onComplete} />
            </div>

  				</div>

          {
            this.state.running === false ? <button className="start">
    					<div onClick={this.startSparring} className="start_p">FIGHT</div>
    				</button> :
            <button className="start start_running">Running</button>
          }

          <button className="back">
  					<div onClick={this.props.backSparrSelect} className="back_p">BACK</div>
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

// Ellbow - function -> if total_moves < x - 1 Ellbow -
// later on more and more moves to earn ellbows - later Animation

// counter while moves - every move increases the counter by 1 -
// to save changes if player decides to stop the game -> onClick on the back-button -
// takes the move-counter and adds to database total_moves and total_rounds.  axios.patch()
// ** c   and    counter!
