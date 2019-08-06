import React, {Component} from 'react';
import TutorialsNavbar from './TutorialsNavbar'
import Burger from '../Burger'
import Sidebar from '../Sidebar'
import TutorialCard from './TutorialCard'
import './TutorialsContent.css'
import TutorialsPopup from './TutorialsPopup'
import axios from 'axios'


class TutorialsContent extends Component {
  //Data
  state = {
    moves: [],
    category: '',
    popup: false,
    selected_card: {},
    card: {}
  }


  //Functions
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


  componentWillMount() {
    axios.get(`${process.env.REACT_APP_API}/api/category`).then( (res) => {
      // console.log('CAT', res.data);
      this.setState({
         move: res.data
      })
    }).catch( (err) => {
      console.log('Card_Err', err);
    })

    axios.get(`${process.env.REACT_APP_API}/api/cards`).then( (res) => {
      // console.log('CAARDS', res.data);
      this.setState({
         moves: res.data
      })
    }).catch( (err) => {
      console.log('Card_Err', err);
    })

  }


  openPopup = (data) => {
    // console.log('POPUP!!!!!!!');
    // console.log('data', data);
    this.setState({
      popup: true,
      card: data
    })
  }

  closePopup = () => {
    this.setState({
      popup: false
    })
  }


  getCardsForCategory = () => {
    axios.get(`${process.env.REACT_APP_API}/api/cards?category=${this.state.category}`).then( (res) => {
      console.log('Link Get Cat' ,`${process.env.REACT_APP_API}/api/cards?category=${this.state.category}`);
      this.setState({
        moves: res.data
      })
    }).catch( (err) => {
      console.log('GetCardErr', err)
    })
  }


  getCards = (id) => {
    this.setState({
      category: id
    }, () => this.getCardsForCategory()
  )
  }





  render() {
    return (
      <div className="tutorials">
      <Sidebar />
    		<div className={this.state.open ? 'tutorials_slider active' : 'tutorials_slider'}>
        <Burger slide={this.slide} open={this.state.open}/>

          <TutorialsNavbar getCards={this.getCards} />

          <TutorialsPopup closePopup={this.closePopup} popup={this.state.popup} card={this.state.card} />

    			<div className="tut_card_container">

          {
            this.state.moves.map( (m) => {
              return <TutorialCard move={m} key={m._id} openPopup={this.openPopup}  />
            })
          }

        </div>
      </div>
    </div>
    )
  }

}
export default TutorialsContent
