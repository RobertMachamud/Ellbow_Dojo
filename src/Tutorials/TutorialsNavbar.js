import React, {Component} from 'react';
import './TutorialsNavbar.css'
import axios from 'axios'
import TutorialsNavLi from './TutorialsNavLi'
import './TutorialsNavLi.css'

class TutorialsNavbar extends Component {
  //Data
  state = {
    categories: [],
    selectedCategory: ''
  }


  //Functions
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}/api/category`).then ( (res) => {
      res.data[0].active = true
      this.setState({
        categories: res.data
      })
      this.selectNav(res.data[0]._id)
      // console.log('res.data[0]', res.data[0])
    }).catch( (err) => {
      console.log('Nav_Err', err);
    })
  }

  selectNav = (id) => {
    let categories = this.state.categories
    categories.forEach( (c) => delete c.active)
    let category = categories.find( (c) => c._id === id)
    category.active = true
    this.setState({ categories, selectedCategory: id })
    // console.log('!!!!!!!!!!!!!!!!!!!!!', this.state.selectedCategory)
  }


  render() {
    return (
      <div className="tut_navbar">
        <nav>
          <ul className="tut_navbar_nav">
            {
              this.state.categories.map( (c) => {
                return <TutorialsNavLi nav={c} key={c._id} selectNav={this.selectNav} getCards={this.props.getCards} categoryID={c._id} />
              })
            }
          </ul>
        </nav>
      </div>
    )
  }

}
export default TutorialsNavbar

// <TutorialsNavLi />
