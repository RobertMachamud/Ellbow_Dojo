import React, {Component} from 'react';
import './TutorialsNavbar.css'
// import TutorialsNavLi from './TutorialsNavLi'

class TutorialsNavbar extends Component {
  //Data
  state = {

  }


  //Functions



  render() {
    return (
      <div class="tut_navbar">
        <nav>
          <ul>
            <li className="tut_tabs">Set up</li>
            <li className="tut_tabs tut_active">Warm up</li>
            <li className="tut_tabs">Arms</li>
            <li className="tut_tabs">Legs</li>
            <li className= "tut_tabs">Combos</li>
          </ul>
        </nav>
      </div>
    )
  }

}
export default TutorialsNavbar

// <TutorialsNavLi />
