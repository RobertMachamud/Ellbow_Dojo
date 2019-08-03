import React, {Component} from 'react'
import './Sidebar.css'
import Logout from './Logout'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  //Data
  state = {}


//Functions


//Render
render() {
  return (
    <div className="sidebar">
      <div className="sidebar_img"></div>

      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/profile"><li>Profile</li></Link>
        <Link to="/sparring"><li>Sparring</li></Link>
        <Link to="/tutorials"><li>Tutorials</li></Link>
        <Link to="/about_us"><li>About us</li></Link>
      </ul>
      <Logout />
    </div>
  )
}

}

export default Sidebar
