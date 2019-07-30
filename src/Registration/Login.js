import React, {Component} from 'react'
import './Login.css'
import axios from 'axios'
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import { MDBInput } from 'mdbreact'
// import TextField from '@material-ui/core/TextField';



class Login extends Component {
  //Data
  state = {
    email: '',
    password: '',
    error: ''
  }


  //Functions
  changeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  changePassword = (e) => {
    this.setState({password: e.target.value})
  }

  login = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', this.state).then( (res) => {
      if (!res.data.token) {
        this.setState({
          error: res.data
        })
      } else {
        this.setState({
          error: ''
        })
        localStorage.setItem('token', res.data.token)
        this.props.auth()
      }
    }).catch( (err) => {
      console.log('Login_Err', err)
    })
  }


  //Render
  render() {
    return (
      <div className="login">
    	<div className="login_card">
    		<form className="login_form" onSubmit={(e) => this.login()}>
    			<div className="logo">
    				<div className="logo_logo"></div>
    				<div className="logo_brand">
    					<span className="logo_header">Ellbow Dojo</span> <br />
    					No pain - no Muay Thai
    				</div>
    			</div>
    			<div>

    				<div className="login_login_box">
    					<input className="inputs" placeholder="Your Email" type="text" value={this.state.email} onChange={(e)=> this.changeEmail(e)} />
    					<input className="inputs" placeholder="Your Password" type="password" value={this.state.password} onChange={(e)=> this.changePassword(e)} />
    				</div>

    				<div className="login_forgot">
    					<p className="login_p">Forrgot your password?</p>
    				</div>
    			</div>


    			<button type="submit" className="login_button">Sign in</button>

    			<div className="login_dont_have_account">
    				<p className="login_p">Don't have an account? <a href="/signup">Sign up!</a></p>
    			</div>
    		</form>
    	</div>

    	<div className="login_txt">
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et architecto, accusamus maxime! Iste beatae dicta, ipsa nulla, quos porro quis asperiores dolorum hic laborum aperiam explicabo alias, enim tempora et?
    	</div>

    </div>
    )
  }

}

export default Login
