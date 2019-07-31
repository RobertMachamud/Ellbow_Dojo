import React, {Component} from 'react';
import './ProfileChange.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'


class ProfileChange extends Component {

  //Data
  state = {
    f_name:  props.f_name,
    l_name:  props.l_name,
    gender:  props.gender,
    age: props.age,
    height: props.height,
    weight: props.weight
  }


  //Functions
  changeFName = (e) => {
    this.setState({ f_name: e.target.value })
  }

  changeLName = (e) => {
    this.setState({ l_name: e.target.value })
  }

  changeAge = (e) => {
    this.setState({ age: e.target.value })
  }

  changeHeight = (e) => {
    this.setState({ height: e.target.value })
  }

  changeWeight = (e) => {
    this.setState({ weight: e.target.value })
  }

  changeData = () => {
    e.preventDefault()
    axios.patch
  }



  //Render
  render() {
    return (


    )
  }

}


export default ProfileChange
