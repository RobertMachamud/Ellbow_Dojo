import React, {Component} from 'react'
import './Sidebar.css'

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
        <li>Home</li>
        <li>Profile</li>
        <li>Sparring</li>
        <li>Tutorials</li>
        <li>About us</li>
      </ul>
    </div>
  )
}

}

export default Sidebar
