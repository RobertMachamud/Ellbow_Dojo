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
            <img className="move_img" src={this.state.img === '' ? 'https://res.cloudinary.com/dxcrd5sos/image/upload/v1564379815/kisspng-kickboxing-muay-thai-mixed-martial-arts-ligue-francophone-de-kick-boxing-muaythai-5d16d8d992fcd4.0760905715617783936021_pvjp1r.png' : this.props.img} alt="move" />
            <div className="move_data">{this.props.move}</div>
          </div>
    )
  }

}

export default Display
