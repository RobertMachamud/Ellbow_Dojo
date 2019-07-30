import React, {Component} from 'react'
import './Signup.css'
import axios from 'axios'

class Signup extends Component {
  //Data
  state = {
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
      <form className="signup">

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

			<div className="signup_signup_box">
				<input placeholder="Your First Name" className="inputs" type="text" />
        <input placeholder="Your Last Name" className="inputs" type="text" />
				<input placeholder="Your Email" className="inputs" type="text" />
				<input placeholder="Your Password" className="inputs" type="password" />
			</div>

			<button className="signup_button">Sign up</button>

		</div>


	</form>
    )
  }

}

export default Signup
