import React, { Component} from 'react'
import ReactDOM from 'react-dom';


export default class Gameselected extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
handleChange = (item)=>{
  console.log(event.target)

  this.props.handleChange(item)
  // if(this.props.gameSelected.filter(food => food.ID === item.ID)){
  //   console.log('its already in here fool', item.ID)
  // }else{
  //   console.log('new game added')
  // }
}

convertTime =(convert)=>{
  let date = new Date(convert);
return date.toLocaleString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
}
showme=()=>{
  let games = this.props.gameSelected;
  return games.map((item,index)=>{
    return(
      <div className="games-selected" key ={item.ID} onClick={()=>this.handleChange(item)}>
        <div className="game-title">
            <span>{item.Details}</span>
        </div>
        <h5>{this.convertTime(item.MatchTime)} </h5>
      </div>
    )

  })
}

  render () {
    return (
      <div id ="game-selected" >
        <button>Continue to Wager Section</button>
        <h1>Bet Slip</h1>
        {this.showme()}
      </div>)
  }
}
