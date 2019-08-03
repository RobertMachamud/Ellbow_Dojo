import React, {Component} from 'react'
import Burger from './Burger'
import Sidebar from './Sidebar'
import './MainContApp.css'
import { Link } from 'react-router-dom'

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
      <div className={"main_container"}>

        <Sidebar />

        <div className={this.state.open ? 'pic_slider active' : 'pic_slider'}>

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

        <Link to="/sparring"><div className="home_sparring_button">Start your Sparring</div></Link>

      </div>
    )
  }

}

export default MainContApp
