import React, {Component} from 'react';
import './ProfileChange.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'


class ProfileChange extends Component {

  //Data
  // state = {
  //   f_name:  props.f_name,
  //   l_name:  props.l_name,
  //   gender:  props.gender,
  //   age: props.age,
  //   height: props.height,
  //   weight: props.weight
  // }
  state = {
    f_name:  '',
    l_name:  '',
    gender:  '',
    age: 0,
    height: 0,
    weight: 0
  }


  //Functions
  componentWillMount() {
    this.getData()
      }

  getData = () => {
    axios.get('http://localhost:5000/api/profile' ,
    {headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}}).then( (res) => {
          this.setState({
            f_name:  res.data.f_name,
            l_name:  res.data.l_name,
            gender:  res.data.gender,
            age: res.data.age,
            height: res.data.height,
            weight: res.data.weight
          })
        })
  }


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


  // changeData = () => {
  //   e.preventDefault()
  //   axios.patch
  // }



  //Render
  render() {
    return (
      <div className="profile_change">

		<form className="profile_change_slider">
			<div className="change_profile_card">
				<div className="ch_pr_left">
					<div className="ch_pr_left_wrapper">
						<div className="ch_pic"></div>
						<div className="ch_pr_pic_button">Change Profile Picture</div>
					</div>
				</div>

				<div className="ch_pr_right">
					<div className="name_input_box">
						<input onChange={this.changeFName} value={this.state.f_name} placeholder="Your First Name" className="ch_input" type="text" />
						<input onChange={this.changeLName} value={this.state.l_name} placeholder="Your Last Name" className="ch_input" type="text" />
					</div>

					<div className="rest_input_bx">
						<div className="rest_input_box_box">
							<input onChange={this.changeAge} value={this.state.age} placeholder="Your Age" className="ch_input" type="number" />
							<input onChange={this.changeHeight} value={this.state.height} placeholder="Your Height" className="ch_input" type="number" />
							<input onChange={this.changeWeight} value={this.state.weight} placeholder="Your Weight" className="ch_input" type="number" />
							<select className="ch_input g_select">
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
					</div>

					<div className="ch_pr_r_button_bx">
            <div onClick={this.getData} className="set_back_button">Reset</div>
						<button className="save_changes_button" type="submit">Save Changes</button>
					</div>
				</div>
			</div>
		</form>
	</div>
    )
  }

}


export default ProfileChange
