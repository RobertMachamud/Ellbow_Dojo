import React, {Component} from 'react'
import './Logout.css'
import { Link } from 'react-router-dom'


class Logout extends Component {
	// Data
	state = {}


	// Functions
	logout = (e) => {
		localStorage.removeItem('token')
		// window.location.reload()
	}


	// Render
	render() {
		return (
			<Link to="/">
				<button onClick={this.logout} className="logout_btn">Logout</button>
			</Link>
		)
	}
}


export default Logout
