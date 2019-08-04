import React, {Component} from 'react'
import './RpsMove.css'



class RpsMove extends Component {
  //Data
  state = {
    rps_move: '',
    img: ''
  }


  //Functions
  componentWillReceiveProps(props) {
    this.setState({
      rps_move: props.rps_move,
      rps_img: props.rps_img
    })
  }

  //Render
  render() {
    return (
      <div className="rps_move">
        <img className="move_img" src={this.state.img} alt="" />
      </div>
    )
  }

}

export default RpsMove
