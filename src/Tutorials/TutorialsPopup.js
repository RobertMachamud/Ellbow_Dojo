import React, {Component} from 'react';
import './TutorialsPopup.css'
// import { Player } from 'video-react'
// import 'node_modules/video-react/dist/video-react.css'
// import axios from 'axios'

class TutorialsPopup extends Component {
  //Data
  state = {
    card: this.props.card
  }


  //Functions
  componentWillMount() {

  }

  show = () => {
    console.log('CARD STATE Will!', this.props.card.vid);
  }



  render() {
    return (
      <div className={this.props.popup === false ? 'popup' : 'popup p_open'}>



        <div className="popup_container">

        <div onClick={this.props.closePopup} className="t_cross">
          <div className="t_line t_one"></div>
          <div className="t_line t_two"></div>
        </div>

          <div className="popup_video_box">
          <video className="video_popup" poster={this.props.card.img}
            controls data-setup=' {} '>
            <source src={this.props.card.vid} type="video/mp4" />
          </video>
          </div>

          <div className="popup_content">
            <button onClick={this.show}></button>

            <div className="poput_name">{this.props.card.name}</div>

            <div className="popup_description">
              {this.props.card.full_descr}
            </div>

          </div>

        </div>


      </div>
    )
  }

}
export default TutorialsPopup


// width="600px" height="400"

// <Player
// playsInline
// poster="https://res.cloudinary.com/dxcrd5sos/image/upload/v1564927223/kisspng-boxing-rings-wrestling-ring-sport-boxing-news-boxing-ring-5b1e4a222a8ee2.0871419215287117141743_xwqj4c.png"
// src="https://res.cloudinary.com/dxcrd5sos/video/upload/v1564831296/20190803_181445_wfwhja.mp4"
// />
