import React, { Component} from 'react'
import ReactDOM from 'react-dom';


export default class Header extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (
      <div id ="header" >
      <div className="header-logo">
      <img src = "./img/sportIcons/nflLogo.svg"/>
      </div>
        <div className = "account-section">

        </div>
        <div className="sport-icons">
          <div className="sports-group">
            <img src="/img/sportIcons/soccer.svg" />
            <img src="/img/sportIcons/football.svg" />
            <img src="/img/sportIcons/mma.svg" />
            <img src="/img/sportIcons/baseball.svg" />
          </div>
        </div>
      </div>)
  }
}
