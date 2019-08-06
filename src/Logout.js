import React, {Component} from 'react'
import './Logout.css'


class Logout extends Component {
	// Data
	state = {}


	// Functions
	logout = (e) => {
		localStorage.removeItem('token')
		window.location.reload()
	}


	// Render
	render() {
		return (
				<button onClick={this.logout} className="logout_btn">Logout</button>
		)
	}
}


export default Logout
