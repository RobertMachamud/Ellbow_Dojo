import React, {Component} from 'react';
import TutorialsNavbar from './TutorialsNavbar'
import Burger from '../Burger'
import Sidebar from '../Sidebar'
import TutorialCard from './TutorialCard'
import './TutorialsContent.css'


class TutorialsContent extends Component {
  //Data
  state = {

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


  render() {
    return (
      <div class="tutorials">
      <Sidebar />
    		<div className={this.state.open ? 'tutorials_slider active' : 'tutorials_slider'}>
        <Burger slide={this.slide} open={this.state.open}/>

    			<TutorialsNavbar />

    			<div class="tut_card_container">

          <TutorialCard />

        </div>
      </div>
    </div>
    )
  }

}
export default TutorialsContent
