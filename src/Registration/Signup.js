import React, {Component} from 'react'
import './Signup.css'
import axios from 'axios'
import Burger from '../Burger'
import Sidebar from '../Sidebar'

class Signup extends Component {
  //Data
  state = {
    open: false,
    f_name: '',
    l_name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    profile_pic: ''
  }


  //Functions
  slide = () => {
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


  // changeInput = (e, x) => {
  //   this.setState({
  //     x: e.target.value
  //   })
  // }

  // Change inputs
  changeAge = (e) => {
    this.setState({ age: e.target.value })
  }

  changeHeight = (e) => {
    this.setState({ height: e.target.value })
  }

  changeWeight = (e) => {
    this.setState({ weight: e.target.value })
  }

  changeFName = (e) => {
    this.setState({ f_name: e.target.value })
  }

  changeLName = (e) => {
    this.setState({ l_name: e.target.value })
  }

  changeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  changePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  // Gender
  changeToMale = (e) => {
    this.setState({ gender: 'male' })
    // console.log(this.state.gender);
  }

  changeToFemale = () => {
    this.setState({ gender: 'female' })
      // console.log(this.state.gender);
  }


  // Signup
  signup = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/signup', this.state).then( (res) => {
      localStorage.setItem('token', res.data.token)
      this.props.auth()
    }).catch( (err) => {
      console.log('Signup_Err', err);
    })
  }

  //Render
  render() {
    return (
      <div className="signup">

        <Sidebar />

        <form onSubmit={(e) => this.signup(e)} className={this.state.open ? 'signup_slider active' : 'signup_slider'}>
        <div className="white_background">

        <Burger slide={this.slide} open={this.state.open}/>

    		<div className="signup_box">
    		<div className="signup_box_head">Additional Info</div>
    			<div className="signup_box_cont">
    				<input placeholder="Your Age"  className="inputs" type="number" min="1" max="100" title="1 - 100 please" value={this.state.age} onChange={(e) => this.changeAge(e)} />
            <input placeholder="Your Height" className="inputs" type="number" min="1" max="200" title="in cm" value={this.state.height} onChange={(e) => this.changeHeight(e)} />
            <input placeholder="Your Weight" className="inputs" type="number" min="1" max="250" title="in kg" value={this.state.weight} onChange={(e) => this.changeWeight(e)} />
    			</div>
    		</div>


    		<div className="signup_card">
    			<div className="signup_logo">
    				<h2 className="signup_header">Sign up</h2>
    				<div className="gender_box">
    					<div onClick={this.changeToMale} className="gender male"></div>
    					<div onClick={this.changeToFemale} className="gender female"></div>
    				</div>
    			</div>

    				<input placeholder="Your First Name" className="inputs" type="text" value={this.state.f_name} onChange={(e) => this.changeFName(e)} />
            <input placeholder="Your Last Name" className="inputs" type="text" value={this.state.l_name} onChange={(e) => this.changeLName(e)} />
    				<input placeholder="Your Email" className="inputs" type="text" value={this.state.email} onChange={(e) => this.changeEmail(e)} />
    				<input placeholder="Your Password" className="inputs" type="password" value={this.state.password} onChange={(e) => this.changePassword(e)} />

    			<button type="submit" className="signup_button">Sign up</button>

  		</div>
      </div>
      <button onClick={this.props.changeToLogin} className="to_login">Back to Login</button>
  	</form>
  </div>
    )
  }

}

export default Signup
