import React, {Component} from 'react'
// import './Sparring.css'
import SelectSparring from './SelectSparring'
import SparringProgramm from './SparringProgramm'
import axios from 'axios'

class Sparring extends Component {
  //Data
  state = {
    status: 'select',
    game: [],
    rounds: 0,
    duration: 0,
    pause: 0,
  }


  //Functions
  componentWillMount() {
    console.log(this.state.game);
  }


  startSparring = (rounds, duration, pause) => {
    console.log('check', this.state);
    axios.get(`http://localhost:5000/api/moves?rounds=${this.state.rounds}&duration=${this.state.duration * 60}`).then( (res) => {
      console.log('Data Game', res.data);
      this.setState({
        status: 'game',
        game: res.data,
        rounds: rounds,
        duration: duration,
        pause: pause
      })
    }).catch( (err) => {
      console.log('errPost', err);
    })
  }

  stop = () => {
    this.setState({
      status: 'select'
    })
  }


  //Render
  render() {
    return (
      <div className="main_sparring">
        {
          this.state.status === 'select' ?
           <SelectSparring startSparring={this.startSparring}  /> : <SparringProgramm stop={this.stop} game={this.state.game} pause={this.state.pause} />
        }
      </div>
    )
  }

}


export default Sparring
