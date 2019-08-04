import React, {Component} from 'react'
import RpsSelect from './RpsSelect'
import RpsGame from './RpsGame'
import axios from 'axios'

class Rps extends Component {
  //Data
  state = {
    status: 'select',
    rounds: 0
  }


  //Functions
  componentWillMount() {

  }


  startRpsGame = (rounds, duration, pause) => {
    // console.log('check', this.state);
    axios.get(`http://localhost:5000/api/moves?rounds=${rounds}&duration=${duration * 60}`).then( (res) => {
      // console.log('Data Game???', res);
      this.setState({
        status: 'game',
        rounds: rounds,
      })
    }).catch( (err) => {
      console.log('errRps_Start', err);
    })
  }

  backRpsSelect = () => {
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
           <RpsSelect startSparring={this.startRpsGame}  /> : <RpsGame backSparrSelect={this.backRpsSelect}
                                                                                      rounds={this.state.rounds}
                                                                                      />
        }
      </div>
    )
  }

}


export default Rps
