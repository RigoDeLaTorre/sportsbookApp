import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import nfldata from './data/nfldata.js'
import Nav from './Nav'
import Nfl from './Nfl'
import Gameselected from './Gameselected'
// import Header from './Header'

export default class Layout extends Component {
  constructor () {
    super()
    this.state = {
      nfldata:nfldata,
      gameSelected:[]
    }
  }
  handleChange =(name)=>{
    this.setState({
       gameSelected: this.state.gameSelected.filter(el => el !== name)
    })

  }


    gameSelected = (item)=>{
      let currentItem = this.state.gameSelected
      let currentState = [...this.state.gameSelected, item]
      let names = [...new Set(currentState.map(a => a))];
      this.setState({
        gameSelected:names
      })
    }

  render () {
    return (

      <div className='app-container'>
          <Nav />
          <Nfl games={this.state.nfldata} gameSelected={this.gameSelected}/>
          <Gameselected gameSelected={this.state.gameSelected} />
      </div>
    
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
