import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import nfldata from './data/nfldata.js'
import Nav from './Nav'
import Nfl from './Nfl'
import Gameselected from './Gameselected'
import Header from './Header'

export default class Layout extends Component {
  constructor () {
    super()
    this.state = {
      nfldata:nfldata,
      gameSelected:[],
      wagers:[]
    }
  }
  convertTime =(convert)=>{
    let date = new Date(convert);
  return date.toLocaleString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
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
    wagers = (e,item)=>{
      e.preventDefault()
      console.log('The game chosen was', item.Details)
      console.log(e.target.getAttribute('class'))
    let line = e.target.firstChild.nodeValue
    console.log(this.state.wagers)
      let currentItem = this.state.wagers

      let currentBet ={
      ID:item.ID,
      Details:item.Details,
      PointSpreadHome:line
      }
      let allBets = [...currentItem, currentBet]
        let names = [...new Set(allBets.map(a => a))];
      this.setState({
        wagers:names
      })
    }

  render () {
    return (

      <div className='app-container'>
          <Header />
          <Nav />
          <Nfl games={this.state.nfldata} gameSelected={this.gameSelected} convertTime={this.convertTime} wager={this.wagers}/>
          <Gameselected gameSelected={this.state.gameSelected} handleChange={this.handleChange} />
      </div>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
