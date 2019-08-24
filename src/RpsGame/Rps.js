import React, {Component} from 'react'
import RpsSelect from './RpsSelect'
import RpsGame from './RpsGame'
// import axios from 'axios'

class Rps extends Component {
  //Data
  state = {
    status: 'select',
    rounds: 0
  }


  //Functions
  componentWillMount() {

  }


  startRpsGame = (rounds) => {
    // console.log('check', this.state);
      this.setState({
        status: 'game',
        rounds: rounds,
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
           <RpsSelect startRpsGame={this.startRpsGame}  /> : <RpsGame backRpsSelect={this.backRpsSelect}
                                                                                      rounds={this.state.rounds}
                                                                                      />
        }
      </div>
    )
  }

}


export default Rps
