import React, { Component} from 'react'
import ReactDOM from 'react-dom';


export default class Nfl extends Component {
  constructor () {
    super()
    this.state = {

    }
  }


gameLoop=()=>{
  return this.props.games.map((item)=>{
    return(
<div className="games-container" key ={item.ID} onClick={()=>this.props.gameSelected(item)}>
      <div className="games match-time">
        <h5>{this.props.convertTime(item.MatchTime)}</h5>
      </div>

      <div className ="gamelist" >
        <div className ="games teams">
          <h5 className="hometeam">{item.AwayTeam}</h5>
        </div>
        <h5 className="spread" onClick={(e)=>this.props.wagersAwaySpread(item)}>{item.Odds[0].PointSpreadAway} ({item.Odds[0].PointSpreadAwayLine})</h5>
        <h5 className="moneyline" onClick={(e)=>this.props.wagersAwayMoneyLine(item)}>{item.Odds[0].MoneyLineAway}</h5>
        <h5 className="total" onClick={(e)=>this.props.wagersAwayTotalOver(item)}>0 {item.Odds[0].TotalNumber} ( {item.Odds[0].OverLine} )</h5>
      </div>
      <div className ="gamelist" >
        <div className ="games teams">
          <h5 className="hometeam">{item.HomeTeam}</h5>
        </div>
        <h5 className="spread" onClick={(e)=>this.props.wagersHomeSpread(item)}>{item.Odds[0].PointSpreadHome} ({item.Odds[0].PointSpreadHomeLine})</h5>
        <h5 className="moneyline" onClick={(e)=>this.props.wagersHomeMoneyLine(item)}>{item.Odds[0].MoneyLineHome}</h5>
        <h5 className="total" onClick={(e)=>this.props.wagersHomeTotalUnder(item)}>U {item.Odds[0].TotalNumber} ( {item.Odds[0].UnderLine} )</h5>
      </div>
</div>
    )
  })
}
  render () {
    return (
      <div id="nfl-section">
        <div className="games-section">
          <div className ="title-headers">
              <div className ="game-header">
                <h5>Team</h5>
              </div>
              <div className="spread-header">
                <h5>Spread</h5>
              </div>
              <div className ="moneyline-header">
                <h5>MoneyLine</h5>
              </div>
              <div className ="overunder-header">
                <h5>Total</h5>
              </div>
            </div>
            {this.gameLoop()}
          </div>


      </div>
    )
  }
}
