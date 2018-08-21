import React, { Component} from 'react'
import ReactDOM from 'react-dom';


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
          <div className="nav-links"><a href="/jquery/">Baseball</a></div>
          <div className="nav-links"><a href="/jquery/">Basketball</a></div>
          <div className="nav-links"><a href="/jquery/">Boxing</a></div>
          <div className="nav-links"><a href="/jquery/">Football</a></div>
          <div className="nav-links"><a href="/jquery/">Ice Hockey</a></div>
          <div className="nav-links"><a href="/jquery/">Soccer</a></div>
          <div className="nav-links"><a href="/jquery/">Tennis</a></div>
          <div className="nav-links"><a href="/jquery/">UFC/MMA</a></div>
      </nav>
      </div>)
  }
}
