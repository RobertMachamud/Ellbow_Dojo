  import React, {Component} from 'react';
  import './RpsSelect.css'
  import Slider from '@material-ui/core/Slider'
  import { withStyles } from '@material-ui/core/styles'
  import '@fortawesome/fontawesome-free/css/all.css'
  import Burger from '../Burger'
  import Sidebar from '../Sidebar'


  const PrettoSlider = withStyles({
    root: {
      color: 'rgba(0,0,0,.5)',
      height: 8,
    },
    thumb: {
      open: false,
      height: 24,
      width: 24,
      backgroundColor: 'purple',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 9,
      borderRadius: 3,
    },
    rail: {
      height: 8,
      borderRadius: 3,
    },


  })(Slider);

  class RpsSelect extends Component {

    //Data
    state = {
      open: false,
      rounds: 5,
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


    changeRounds = (e, val) => {
      // console.log('val', val)
      this.setState({ rounds: val })
      // console.log(this.state.rounds);
    }


    // startSparring = (e) => {
    //   e.preventDefault()
    //
    //   this.props.passPause(this.state.pause)
    //   axios.get(`http://localhost:5000/api/moves?rounds=${this.state.rounds}&duration=${this.state.duration * 60}`).then( (res) => {
    //     console.log('Data Game', res.data);
    //     this.props.gameOn()
    //   }).catch( (err) => {
    //     console.log('errPost', err);
    //   })
    //
    // }


    //Render
    render() {
      return (
        <div className="select_rps">

          <Sidebar />

        		<div className={this.state.open ? 'select_rps_slider active' : 'select_rps_slider'}>

            <Burger slide={this.slide} open={this.state.open}/>

        			<div className="sel_rps_container">

        				<div className="sel_rps_container_head">
        				<h2 className="sel_rps_container_header">Choose Rounds</h2>
        				</div>

        				<form className="sel_rps_slider_form">
        					<div className="sel_rps_slider_container">

                  <PrettoSlider defaultValue={5}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                min={1}
                                max={10}
                                value={this.state.rounds}
                                onChange={(e, val) => this.changeRounds(e, val)} />

        					</div>

        					<button type="submit" className="sel_rps_button">GAME ON!</button>
        				</form>

        			</div>

        			<div className="sel_rps_time_info">
        				<div className="rps_time_info_circles">
        					<div className="i_circle"><i className="fas fa-circle-notch"></i></div>

        				</div>

        				<div className="rps_time_info_data">
        					<div className="rps_i_data"><span className="rps_i_data_span">{this.state.rounds}</span> Rounds</div>
        				</div>
        			</div>
        		</div>
        	</div>

      )
    }

  }


  export default RpsSelect
