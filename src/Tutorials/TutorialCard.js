import React, {Component} from 'react';
import './TutorialCard.css'

class TutorialCard extends Component {
  //Data
  state = {
    
  }


  //Functions



  render() {
    return (
      <div class="tut_card">
            <div class="tut_img_box">
                <img class="tut_img" src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1563806472/Bewerbungsfoto-Vorher-min_jicktv.jpg" alt="move" />
            </div>
            <div class="tut_content">
                <h3 class="tut_move_name">Jab</h3>
                <p class="tut_description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>

                <button class="tut_button">See Video</button>
            </div>
        </div>
    )
  }

}
export default TutorialCard
