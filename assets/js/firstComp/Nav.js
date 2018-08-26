import React, { Component} from 'react'
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom'



export default class Nav extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (
      <div id ="nav" >
        <div className="account-dropdown">
          <div className="logo">
      <i className="fa fa-user" aria-hidden="true"></i>

          </div>
          <div className="name">Tuff Fish</div>
          <div className="icon"> <i className="fas fa-chevron-down"></i> </div>
        </div>
        <nav>

          <div className="nav-links"><NavLink to="/mlb" activeClassName="selected">Baseball </NavLink></div>
          <div className="nav-links"><NavLink to="/nba" activeClassName="selected">BasketBall </NavLink></div>
          <div className="nav-links"><NavLink to="/boxing" activeClassName="selected">Boxing </NavLink></div>
        <div className="nav-links"><NavLink to="/nfl" activeClassName="selected">Nfl </NavLink></div>
          <div className="nav-links"><NavLink to="/hockey" activeClassName="selected">Hockey </NavLink></div>
          <div className="nav-links"><NavLink to="/soccer" activeClassName="selected">Soccer </NavLink></div>
          <div className="nav-links"><NavLink to="/tennis" activeClassName="selected">Tennis </NavLink></div>
          <div className="nav-links"><NavLink to="/mma" activeClassName="selected">UFC/MMA </NavLink></div>
      </nav>
      </div>)
  }
}
