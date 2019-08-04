import React, {Component} from 'react';
import './Profile.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import Sidebar from '../Sidebar'
import Burger from '../Burger'
import { Link } from 'react-router-dom'


class Profile extends Component {

  //Data
  state = {
    open: false,
    bmi: 0,
    user: {
      f_name: 'Please',
      l_name: 'Login',
      gender: '?',
      age: 0,
      height: 0,
      weight: 0,
      total_rounds: 0,
      total_moves: 0,
      total_ellbows: 0,
      file: null
    }
  }


  //Functions
  componentWillMount() {
    axios.get('http://localhost:5000/api/profile' ,
    {headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}}).then( (res) => {
          console.log('data', res.data);
          this.setState({
            user: res.data,
            bmi: parseFloat((res.data.weight / ((res.data.height / 100) * 2)).toFixed(1))
          })
        })
      }

      slide = () => {
        if (this.state.open) {
          this.setState({
            open: false
          })
        } else {
          this.setState({
            open: true
          })
        }
    	}

      shortenData = (data) => {
        if (data > 1000) {
          return parseFloat((data / 1000).toFixed(1)) + "K"
        } else {
          return data
        }
      }


  render() {
    return (
        <div className="profile_main_container">

          <Sidebar />

          <div className={this.state.open ? 'profile_slider active' : 'profile_slider'}>

          <Burger slide={this.slide} open={this.state.open}/>

    	    <div className="profile_container">
      		<div className="name_container">
      			<span className="f_name">{this.state.user.f_name}</span> <br />
      			<span className="l_name">{this.state.user.l_name}</span>
      		</div>

      		<Link to="/"><div className="c_cross">
      			<div className="c_line c_one"></div>
      			<div className="c_line c_two"></div>
      		</div>
        </Link>

      		<div className={this.state.user.gender === 'male' ? 'pic_container_m' : 'pic_container_f'}>
            <img className="pic_container_img" alt="profile_picture" src={this.state.user.file} />
      		</div>

      		<div className="info_container">

    			<div className="info_cont">
    				<h5 className="info_head">My PROFILE</h5>

    				<div className="info_info">

    					<div className="d_circle_container">
    						<div className="d_circle gender_c">
    							<i className={this.state.user.gender === 'male' ? 'fas fa-mars' : 'fas fa-venus' }></i>
    						</div>
    						<div className="d_circle age_c">
    							<i className="fas fa-birthday-cake"></i>
    						</div>
    						<div className="d_circle height_c">
    							<i className="fas fa-arrows-alt-v"></i>
    						</div>
    						<div className="d_circle weight_c">
    							<i className="fas fa-weight-hanging"></i>
    						</div>
    						<div className="d_circle bmi_c">
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
    						<div className="data_a">{this.state.user.height} cm</div>
    						<div className="data_a">{this.state.user.weight} kg</div>
    						<div className="data_a">{this.state.bmi}</div>
    					</div>

    				  </div>


      				<div className="info_bottom_container">
      					<div className="info_bottom_sub">
      						<div className="info_bottom"><span className="info_b_data">{this.state.user.total_rounds}</span>Total Rounds</div>
      						<div className="info_bottom"><span className="info_b_data">{this.shortenData(this.state.user.total_moves)}</span>Total Moves</div>
      						<div className="info_bottom"><span className="info_b_data">{this.state.user.total_ellbows}</span>Total Ellbows</div>
      					</div>
      				</div>
      			</div>

            <Link to="/profile_change">
          <div title="go to Change Profile" className="to_change_profile"></div>
          </Link>

    		</div>
    	</div>
    </div>
  </div>

    )
  }

}


export default Profile
