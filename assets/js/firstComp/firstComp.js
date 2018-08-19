import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Nfl from './nfl'
import Header from './Header'

export default class Layout extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (<div className='home'>
          <Header />
          <Nfl />
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
