import React, {Component} from 'react';
import './TutorialsNavbar.css'
import axios from 'axios'
import TutorialsNavLi from './TutorialsNavLi'
import './TutorialsNavLi.css'

class TutorialsNavbar extends Component {
  //Data
  state = {
    navs: []
  }


  //Functions
  componentDidMount() {
    axios.get('http://localhost:5000/api/navs').then ( (res) => {
      res.data[0].active = true
      this.setState({
        navs: res.data
      })
      this.selectNav(res.data[0]._id)
      // console.log('res.data[0]', res.data[0])
    }).catch( (err) => {
      console.log('Nav_Err', err);
    })
  }

  selectNav = (id) => {
    let navs = this.state.navs
    navs.forEach( (n) => delete n.active)
    let nav = navs.find( (n) => n._id === id)
    nav.active = true
    this.setState({ navs })
  }


  render() {
    return (
      <div className="tut_navbar">
        <nav>
          <ul className="tut_navbar_nav">
            {
              this.state.navs.map( (n) => {
                return <TutorialsNavLi nav={n} key={n._id} selectNav={this.selectNav} />
              })
            }
          </ul>
        </nav>
      </div>
    )
  }

}
export default TutorialsNavbar

// <TutorialsNavLi />
