import React, {Component} from 'react'
import './Signup.css'
import axios from 'axios'
import Burger from '../Burger'
import Sidebar from '../Sidebar'

class Signup extends Component {
  //Data
  state = {
    open: false,
    name: '',
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

        <form className={this.state.open ? 'signup_slider active' : 'signup_slider'}>
        <div className="white_background">

        <Burger slide={this.slide} open={this.state.open}/>

    		<div className="signup_box">
    		<div className="signup_box_head">Additional Info</div>
    			<div className="signup_box_cont">
    				<input placeholder="Your Age" className="inputs" type="text" />
            <input placeholder="Your Height" className="inputs" type="text" />
            <input placeholder="Your Weight" className="inputs" type="text" />
    			</div>
    		</div>


    		<div className="signup_card">
    			<div className="signup_logo">
    				<h2 className="signup_header">Sign up</h2>
    				<div className="gender_box">
    					<div className="gender male"></div>
    					<div className="gender female"></div>
    				</div>
    			</div>

    				<input placeholder="Your First Name" className="inputs" type="text" />
            <input placeholder="Your Last Name" className="inputs" type="text" />
    				<input placeholder="Your Email" className="inputs" type="text" />
    				<input placeholder="Your Password" className="inputs" type="password" />

    			<button className="signup_button">Sign up</button>

  		</div>
      </div>
  	</form>
  </div>
    )
  }

}

export default Signup
