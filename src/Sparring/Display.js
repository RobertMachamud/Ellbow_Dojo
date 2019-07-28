import React, {Component} from 'react'
import './Display.css'



class Display extends Component {
  //Data
  state = {
    // move: this.props.move,
    // img: this.props.img
    move: '',
    img: ''
  }


  //Functions
  componentWillReceiveProps(props) {
    this.setState({
      move: props.move,
      img: props.img
    })
  }

  //Render
  render() {
    return (
      <div className="move">
            <img className="move_img" src={this.state.img === '' ? 'https://res.cloudinary.com/dxcrd5sos/image/upload/v1561663244/ccimage-shutterstock_129916532_u5aina.jpg' : this.props.img} alt="move" />
            <div className="move_data">{this.props.move}</div>
          </div>
    )
  }

}

export default Display
