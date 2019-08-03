import React, {Component} from 'react';
import './TutorialCard.css'
// import axios from 'axios'

class TutorialCard extends Component {
  //Data
  state = {
    card: this.props.card
    // card_name: '',
    // mini_descr: '',
    // full_descr: '',
    // pic: '',
    // vid: '',
    // level: ''
  }


  //Functions
  componentWillMount() {
    // console.log('CARD STATE Will!', this.state);
  }







  render() {
    return (
      <div className="tut_card">
            <div className="tut_img_box">
                <img className="tut_img" src={this.state.card.pic} alt="move" />
            </div>
            <div className="tut_content">
                <h3 className="tut_move_name">{this.state.card.card_name}</h3>
                <p className="tut_description">
                  {this.state.card.mini_descr}
                </p>

                <button className="tut_button">See Full Description</button>
            </div>
        </div>
    )
  }

}
export default TutorialCard
