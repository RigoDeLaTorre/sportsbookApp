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
convertTime = (convert) => {
  let date = new Date(convert);
return date.toLocaleString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
}

showme=()=>{
  let games = this.props.wagers;
  return games.map((item,i)=>{
    return(
      <div className="game-selected-container" key ={i} onClick={()=>this.handleChange(item)}>
          <div className="bet-container">
              <div className="bet-chosen">
                    <span className="teamChozen">{item.teamChosen}  {(item.line>0 && item.wagerType==='moneyline' || item.line>0 && item.wagerType==='spread' ? '+ '+ item.line : item.line)} </span>
                  <span className="wager-type">{item.wagerType}</span>
              </div>
              <span className="wager-type">{(item.wagerType==='moneyline' ? '': item.juice)}</span>
          </div>
          <div className="match-container">
            <span className="game">{item.Details}</span>
            <span className="match-time">{this.convertTime(item.matchTime)}</span>
          </div>
          <div className="wager-amount">
            <input type="text" name="fname" />
            <input type="text" name="fname" />
          </div>
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
