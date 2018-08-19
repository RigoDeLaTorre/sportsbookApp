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
        <nav>
          <a href="/jquery/">Baseball</a>
          <a href="/html/">Basketball</a>
          <a href="/js/">Boxing</a>
          <a href="/html/">Football</a>
          <a href="/js/">Ice Hockey</a>
          <a href="/css/">Soccer</a>
          <a href="/jquery/">Tennis</a>
          <a href="/css/">UFC/MMA</a>
      </nav>
      </div>)
  }
}
