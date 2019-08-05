import React, {Component} from 'react'
import './SparringProgramm.css'
import axios from 'axios'
import Display from './Display'
import ReactCountdownClock from 'react-countdown-clock'
import Sound from 'react-sound'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


class SparringProgramm extends Component {
  //Data
  state = {
    running: false,
    rem_rounds: 0,
    remaning_rounds: 0,
    remaning_time: 0,
    move: '',
    img: '',
    game: this.props.game,
    rounds: this.props.rounds,
    duration: this.props.duration,
    pause: this.props.pause,
    paused: true,
    gap: 2000,
    timer: 0,
    sound: '',
    total_rounds: 0,
    total_moves: 0,
    reward_counter: 150,
    dialog_open: false,
    transition: React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
    })
  }


  //Functions
  // getData = () => {
  //   axios.get('http://localhost:5000/api/profile' ,
  //   {headers: {
	// 				Authorization: `Bearer ${localStorage.getItem('token')}`
	// 			}}).then( (res) => {
  //         console.log('RES Get', res);
  //         this.setState({
  //           total_rounds: res.data.total_rounds,
  //           total_moves: res.data.total_moves
  //         }, () => {
  //           // console.log('State GET', this.state);
  //         })
  //       })
  // }

  //Functions
  componentWillMount() {
    // console.log('STAAAATE', this.state);
    this.getData()
    this.setState({
      rem_rounds: this.props.rounds,
      remaning_time: this.props.rounds * this.props.duration
    })
    // console.log('props', this.props);
    // console.log('sparr_state' ,this.state);
  }

  componentWillReceiveProps(props) {
    this.setState({
      pause: props.pause,
      game: props.game
    })
  }



  // Axios -> Get Totals
  getData = () => {
    axios.get(`${process.env.REACT_APP_API}/api/profile` ,
    {headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }}).then( (res) => {
          // console.log('RES Get', res);
          this.setState({
            total_rounds: res.data.total_rounds,
            total_moves: res.data.total_moves
          }, () => {
            console.log('State GET', this.state);
          })
        })
  }

  // Update -> Patch  Totals
  updateTotals = (rounds, moves) => {
    // console.log('Updaaaaate', rounds, moves);
    axios.patch(`${process.env.REACT_APP_API}/api/profile`, {
      total_rounds: this.state.total_rounds + rounds,
      total_moves: this.state.total_moves + moves
    },
    {headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }}).then( (res) => {
          // console.log('RES_Change', res);
          this.setState({
            total_rounds: res.data.user.total_rounds,
            total_moves: res.data.user.total_moves
          }, () => {
            console.log('NEW state', this.state);
          })
          localStorage.setItem('token', res.data.token)
        }).catch(err => console.log('err', err))
  }

  // Update -> Patch   total Ellbows
  updateEllbows = (ellbow) => {
    // console.log('Updaaaaate', rounds, moves);
    axios.patch(`${process.env.REACT_APP_API}/api/profile`, {
      total_ellbows: this.state.total_ellbows + ellbow
    },
    {headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }}).then( (res) => {
          // console.log('RES_Change', res);
          this.setState({
            total_ellbows: res.data.user.total_ellbows
          }, () => {
            console.log('NEW Ellbow state', this.state);
          })
          localStorage.setItem('token', res.data.token)
        }).catch(err => console.log('err', err))
  }


  // Small Functions   ->  Timer/Start/Stop/Remaining
  onComplete = () => {
    this.setState({ timer: this.state.timer + 1 })
  }

  startSparring = () => {
    this.setState({ running: true })
    this.play()
  }

  stopSparr = () => {
    this.setState({ running: false })
  }


  remRounds = (round) => {
    this.setState({
      rem_rounds: this.props.rounds - this.state.rounds
    })
  }


  remTime = (total_time) => {
      if (total_time > 0) {
        setTimeout( () => {
          total_time -= 1
          this.setState({
            remaning_time: total_time
          })
          this.remTime(this.state.remaning_time)
        }, 60 * 1000)
      }
    }



  // Reward Ellbows ++
  rewardEllbow = (reward) => {   // call:  this.rewardEllbow(thisthis.state.reward_counter)
    console.log('Reward State', this.state);
    if (this.state.total_moves >= reward) {
      console.log('!!!!!!!ELLBOW!!!!!!')
      this.updateEllbows(1)
      this.setState({
        reward_counter: reward + (reward * 1.5)
      })
    }
  }




  // Game
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
           img: `${round[counter - 1].img}`,
           sound: `${round[counter - 1].sound}`
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
            this.rewardEllbow()
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

    setTimeout( () => {
      this.remTime(this.state.remaning_time)
    }, 4000)

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
         this.remRounds(c)
         this.play_round(this.props.game[c - 1], c, this.props.game)
         setTimeout( () => {
           st(c)   // repeat (kinda condition)
         }, (this.props.pause * 60) * 1000)
       }, c < 1 ? 2000 : (this.props.game[0].length + 1) * this.state.gap)
     }
    }
    st(0)
  }

  // Sound
  handleSongLoading = () => {
    // console.log('loading audio');
  }

  handleSongPlaying = () => {
    // console.log('playing audio');
  }

  handleSongFinishedPlaying = () => {
    // console.log('finished audio');
  }

  // Dialog
  handleClickOpen =() => {
    this.setState({
      dialog_open: true
    })
  }

  handleClickClose =() => {
    this.setState({
      dialog_open: false
    })
  }



  //Render
  render() {
    return (
      <div className="sparr">

  		<div className="sparr_container">
  			<div className="sparr_data_container">

  			<div className="round">Round: <span className="s_data_span">{this.state.rounds}</span></div>

    				<div className="sparr_data_box">
              <div className="s_data_bx">
                <div className="s_data_cont">Remaining Rounds:</div>
                <div className={this.state.running === false ? 's_data_data' : 's_data_data s_data_running'}>{this.state.rem_rounds}</div>

                <div className="s_data_cont">Remaining Time:</div>
                <div className={this.state.running === false ? 's_data_data' : 's_data_data s_data_running'}>{this.state.remaning_time}</div>
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
  					<div onClick={() => {this.handleClickOpen()}} className="back_p">BACK</div>
  				</button>
          <Dialog
             open={this.state.dialog_open}
             TransitionComponent={this.state.transition}
             keepMounted
             onClose={this.handleClickClose}
             aria-labelledby="alert-dialog-slide-title"
             aria-describedby="alert-dialog-slide-description"
           >
           <DialogTitle id="alert-dialog-slide-title">{"STOP SPARRING AND RETURN TO SELECT?"}</DialogTitle>
           <DialogContent>
             <DialogContentText id="alert-dialog-slide-description">
               Are you sure you want to STOP your SPARRING-PROGRAMM?
             </DialogContentText>
           </DialogContent>
           <DialogActions>
             <Button onClick={() => {this.handleClickClose(); this.props.backSparrSelect()}} color="secondary">
               LEAVE
             </Button>
             <Button onClick={this.handleClickClose} color="primary">
               STAY
             </Button>
           </DialogActions>
         </Dialog>
  			</div>

  			<div className="sparr_disp">
  				<div className="display_moves">
  					<Display move={this.state.move} img={this.state.img} />
            <Sound url={this.state.sound} playStatus='PLAYING' onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}/>
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
