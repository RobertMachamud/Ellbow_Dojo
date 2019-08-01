import React, {Component} from 'react';
import './SelectSparring.css'
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import Burger from '../Burger'
import Sidebar from '../Sidebar'


// const marks = [
//   {
//     value: 1,
//     label: '1'
//   },
//   {
//     value: 2,
//     label: '2'
//   },
//   {
//     value: 3,
//     label: '3'
//   },
//   {
//     value: 4,
//     label: '4'
//   },
//   {
//     value: 5,
//     label: '5'
//   },
//   {
//     value: 6,
//     label: '6'
//   },
//   {
//     value: 7,
//     label: '7'
//   },
//   {
//     value: 8,
//     label: '8'
//   },
//   {
//     value: 9,
//     label: '9'
//   },
//   {
//     value: 10,
//     label: '10'
//   },
// ]


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

class SelectSparring extends Component {

  //Data
  state = {
    open: false,
    rounds: 5,
    duration: 3,
    pause: 1
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

  changeDuration = (e, val) => {
    this.setState({ duration: val })
  }

  changePause = (e, val) => {
    this.setState({ pause: val })
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
      <div className="select_sparring">

        <Sidebar />

        <div className={this.state.open ? 'select_sparring_slide active' : 'select_sparring_slide'}>

        <Burger slide={this.slide} open={this.state.open}/>

        <div className="sel_spar_container">

        <div className="sel_spar_container_head">
				<h2 className="sel_spar_container_header">Select your Sparring</h2>
				</div>

        <form onSubmit={(e) => {e.preventDefault();
          this.props.startSparring(this.state.rounds, this.state.duration, this.state.pause);}} className="sel_spar_slider_form">

          <div className="sel_spar_slider_container">

            <PrettoSlider defaultValue={5}
                          aria-labelledby="discrete-slider"
                          valueLabelDisplay="auto"
                          step={1}
                          min={1}
                          max={10}
                          value={this.state.rounds}
                          onChange={(e, val) => this.changeRounds(e, val)} />

            <PrettoSlider defaultValue={3}
                          aria-labelledby="discrete-slider"
                          valueLabelDisplay="auto"
                          step={1}
                          min={1}
                          max={10}
                          value={this.state.duration}
                          onChange={(e, val) => this.changeDuration(e, val)} />

            <PrettoSlider defaultValue={1}
                          aria-labelledby="discrete-slider"
                          valueLabelDisplay="auto"
                          step={1}
                          min={1}
                          max={10}
                          value={this.state.pause}
                          onChange={(e, val) => this.changePause(e, val)} />
          </div>
            <button type="submit" className="sel_spar_button">FIGHT!</button>
        </form>

          </div>

          <div class="sel_sparr_time_info">
            <div className="time_info_circles">
              <div className="i_circle"><i className="fas fa-circle-notch"></i></div>
              <div className="i_circle"><i className="fas fa-stopwatch"></i></div>
              <div className="i_circle"><i className="fas fa-pause"></i></div>
              <div className="i_circle i_total"><i className="far fas fa-clock"></i></div>
            </div>

            <div className="time_info_data">
              <div className="i_data"><span className="i_data_span">{this.state.rounds}</span> Rounds</div>
              <div className="i_data"><span className="i_data_span">{this.state.duration}</span> min Time</div>
              <div className="i_data"><span className="i_data_span">{this.state.pause}</span> min Break</div>
              <div className="i_data i_total"><span className="i_data_span">{this.state.rounds * this.state.duration}</span> min Total Time</div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}


export default SelectSparring
