import React, {Component} from 'react';
import './Profile.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'


class Profile extends Component {

  //Data
  state = {
    user: {
      f_name: 'fff',
      l_name: '',
      gender: '?',
      age: 67,
      height: 0,
      weight: 0,
      bmi: 0,
      totoal_rounds: 0,
      totoal_moves: 0,
      total_ellbows: 0
    }
  }


  //Functions
  componentWillMount() {
    axios.get('http://localhost:5000/api/profile' ,
    {headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}}).then( (res) => {
          console.log(res);
          this.setState({
            user: res.data
          }, () => {
            console.log('state', this.state);
          })
        })

    console.log(this.state);

  }


  // calcBmi = () => {
  //   this.setState({
  //
  //   })
  //   this.state.user.weight / ((this.state.user.height / 100) * 2)
  // }
  // componentDidMount() {
  //   console.log(this.state);
  // }

  // NAME
  // <div className="name_container">
	// 	<span className="f_name">{this.state.f_name}</span> <br />
	// 	<span className="l_name">{this.state.l_name}</span>
	// </div>

  //  DATA
  // <div className="info_info_data_container">
  //   <div className="data_a">{this.state.gender}</div>
  //   <div className="data_a">52{this.state.age}</div>
  //   <div className="data_a">{this.state.height}cm</div>
  //   <div className="data_a">this.state.weight}kg</div>
  //   <div className="data_a">{this.state.bmi}</div>
  // </div>

  // BOTTOM
  // <div className="info_bottom_sub">
  //   <div className="info_bottom"><span className="info_b_data">{this.state.totoal_rounds}</span>Total Rounds</div>
  //   <div className="info_bottom"><span className="info_b_data">{this.state.totoal_moves}</span>Total Moves</div>
  //   <div className="info_bottom"><span className="info_b_data">{this.state.total_ellbows}</span>Total Ellbows</div>
  //   </div>

  // NAME HARD CODE
  // <div className="name_container">
  //   <span className="f_name">Karen</span> <br />
  //   <span className="l_name">Hammersmith</span>
  // </div>


  // DATE HARD CODE
  // <div className="info_info_data_container">
  //   <div className="data_a">FEMALE</div>
  //   <div className="data_a">52</div>
  //   <div className="data_a">175cm</div>
  //   <div className="data_a">65kg</div>
  //   <div className="data_a">0,02</div>
  // </div>
  //


  // BOTTOM HARD CODE
  // <div className="info_bottom_container">
  // <div className="info_bottom_sub">
  //   <div className="info_bottom"><span className="info_b_data">50</span>Total Rounds</div>
  //   <div className="info_bottom"><span className="info_b_data">150</span>Total Moves</div>
  //   <div className="info_bottom"><span className="info_b_data">7</span>Total Ellbows</div>
  //   </div>
  // </div>



  render() {
    return (
      <div className="profile_main_container">
	<div className="profile_container">

    <div className="name_container">
  		<span className="f_name">{this.state.user.f_name}</span> <br />
  		<span className="l_name">{this.state.user.l_name}</span>
  	</div>



<div className="c_cross">
	<div className="c_line c_one"></div>
	<div className="c_line c_two"></div>
</div>

		<div className="pic_container">
		</div>

		<div className="info_container">

		<div className="info_cont">
			<h5 className="info_head">My PROFILE</h5>

			<div className="info_info">

				<div className="circle_container">
					<div className="circle gender_c">
						<i className="fas fa-venus"></i>
					</div>
					<div className="circle age_c">
					<i className="fas fa-birthday-cake"></i>
					</div>
					<div className="circle height_c">
						<i className="fas fa-arrows-alt-v"></i>
					</div>
					<div className="circle weight_c">
					<i className="fas fa-weight-hanging"></i>
					</div>
					<div className="circle bmi_c">
						<i className="fas fa-weight"></i>
					</div>
				</div>

  			<div className="info_info_cont">
  				<div className="data_c gender_d">gender: </div>
  				<div className="data_c age_d">age: </div>
  				<div className="data_c heigth_d">heigth: </div>
  				<div className="data_c weight_d">weight: </div>
  				<div className="data_c bmi_d">bmi: </div>
  			</div>


        <div className="info_info_data_container">
          <div className="data_a">{this.state.user.gender}</div>
          <div className="data_a">{this.state.user.age}</div>
          <div className="data_a">{this.state.user.height}cm</div>
          <div className="data_a">{this.state.user.weight}kg</div>
          <div className="data_a">{this.state.user.bmi}</div>
        </div>

			</div>


			<div className="info_bottom_container">
        <div className="info_bottom_sub">
          <div className="info_bottom"><span className="info_b_data">{this.state.user.totoal_rounds}</span>Total Rounds</div>
          <div className="info_bottom"><span className="info_b_data">{this.state.user.totoal_moves}</span>Total Moves</div>
          <div className="info_bottom"><span className="info_b_data">{this.state.user.total_ellbows}</span>Total Ellbows</div>
          </div>
			</div>
		</div>

		</div>
	</div>
	</div>

    )
  }

}


export default Profile
