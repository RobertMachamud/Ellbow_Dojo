import React, {Component} from 'react';
import './TutorialCard.css'
import axios from 'axios'

class TutorialCard extends Component {
  //Data
  state = {
    cards: []
  }


  //Functions
  componentWillMount() {
    axios.get('http://localhost:5000/api/navs').then( (res) => {
      console.log('CAARDS', res.data);
      this.setState({
         cards: res.data
      })
    }).catch( (err) => {
      console.log('Card_Err', err);
    })
  }



  render() {
    return (
      <div className="tut_card">
            <div className="tut_img_box">
                <img className="tut_img" src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1563806472/Bewerbungsfoto-Vorher-min_jicktv.jpg" alt="move" />
            </div>
            <div className="tut_content">
                <h3 className="tut_move_name">Jab</h3>
                <p className="tut_description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>

                <button className="tut_button">See Full Description</button>
            </div>
        </div>
    )
  }

}
export default TutorialCard
