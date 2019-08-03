import React, {Component} from 'react';
import TutorialsNavbar from './TutorialsNavbar'
import Burger from '../Burger'
import Sidebar from '../Sidebar'
import TutorialCard from './TutorialCard'
import './TutorialsContent.css'
import axios from 'axios'


class TutorialsContent extends Component {
  //Data
  state = {
    cards: [],
    nav: ''
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
    axios.get('http://localhost:5000/api/navs').then( (res) => {
      // console.log('NAV', res.data);
      this.setState({
         cards: res.data
      })
    }).catch( (err) => {
      console.log('Card_Err', err);
    })

    axios.get('http://localhost:5000/api/cards').then( (res) => {
      console.log('CAARDS', res.data);
      this.setState({
         cards: res.data
      })
    }).catch( (err) => {
      console.log('Card_Err', err);
    })


    // axios.get(`http://localhost:5000/api/nav=${this.state.nav}`).then((res) => {
    //   this.setState({
    //     messages: res.data
    //   })
    // }).catch((err) => {
    //   console.log('err', err)
    // })

  }


  getCards = (id) => {
    this.setState({
      nav: id
    })
  }





  render() {
    return (
      <div className="tutorials">
      <Sidebar />
    		<div className={this.state.open ? 'tutorials_slider active' : 'tutorials_slider'}>
        <Burger slide={this.slide} open={this.state.open}/>

    			<TutorialsNavbar />

    			<div className="tut_card_container">

          {
            this.state.cards.map( (c) => {
              return <TutorialCard card={c} key={c._id}  />
            })
          }

        </div>
      </div>
    </div>
    )
  }

}
export default TutorialsContent
