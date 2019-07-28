import React, {Component} from 'react';
import './App.css'
import Sidebar from './Sidebar'
import MainContApp from './MainContApp'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <MainContApp />
      </div>
    )
  }

}
export default App
