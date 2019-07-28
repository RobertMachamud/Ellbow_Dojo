import React, {Component} from 'react'
import './Burger.css'

class Burger extends Component {
  //Data
  state = {
    open: this.props.open
  }


  componentWillReceiveProps(props) {
    this.setState({
      open: props.open
    })
  }

  //Render
  render() {
    return (
      <div id="b_wrapper" onClick={() => this.props.slide()}>
        <div className={this.state.open ? 'circle icon close' : 'circle icon'}>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </div>
      </div>
    )
  }

}

export default Burger
