import React, {Component} from 'react'
import Burger from './Burger'
import './MainContApp.css'

class MainContApp extends Component {
  //Data
  state = {
    open: false
  }


  //Functions
  slide = () => {
		// document.getElementById('main').classList.toggle('active')
    if (this.state.open) {
      console.log('it is open');
      this.setState({
        open: false
      })
    } else {
      console.log('it is not open');
      this.setState({
        open: true
      })
    }
	}

  //Render
  render() {
    return (
      <div id="main" className={this.state.open ? 'main_container active' : 'main_container'}>
        <div className="pic_slider">
          <Burger slide={this.slide} open={this.state.open}/>
        </div>

        <div className="home_txt_box">
            Muay Thai or Thai Boxing is the <br />
            national sport and cultural martial art <br />
            of Thailand. It was developed several <br />
            hundreds of years ago as a form of <br />
            colose-combat that utilizes the entire <br />
            body as a weapon.
        </div>

        <div className="home_sparring_button">Start your Sparring</div>
      </div>
    )
  }

}

export default MainContApp
