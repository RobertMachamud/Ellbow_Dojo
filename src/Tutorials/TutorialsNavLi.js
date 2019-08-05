import React, {Component} from 'react';
import './TutorialsNavLi.css'


class TutorialsNavLi extends Component {
  //Data
  state = {
    nav: this.props.nav
  }


  //Functions
  componentWillMount() {
		// console.log(this.props)
	}



  render() {
    return (
      <li className={this.state.nav.active ? 'tut_tabs nav_active' : 'tut_tabs'}
      onClick={() => {this.props.getCards(this.props.categoryID);
        this.props.selectNav(this.state.nav._id);}}>{this.state.nav.name}</li>
    )
  }

}


export default TutorialsNavLi
