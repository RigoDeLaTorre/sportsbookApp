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
          <div className="logo"><i className="fa fa-user" aria-hidden="true"></i></div>
          <div className="name">Angel Lopez</div>
          <div className="icon"> <i className="fas fa-chevron-down"></i> </div>
        </div>
        <nav>
          <div><a href="/jquery/">Baseball</a></div>
          <div><a href="/jquery/">Baseball</a></div>
          <div><a href="/jquery/">Baseball</a></div>
          <div><a href="/jquery/">Baseball</a></div>
          <div><a href="/jquery/">Baseball</a></div>
          <div><a href="/jquery/">Baseball</a></div>
          <div><a href="/jquery/">Baseball</a></div>
      </nav>
      </div>)
  }
}
