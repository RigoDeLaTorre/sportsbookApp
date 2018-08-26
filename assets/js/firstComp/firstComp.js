import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import nfldata from './data/nfldata.js'
import mlbdata from './data/mlbdata.js'
import Nav from './Nav'
import Nfl from './Nfl'
import Mlb from './Mlb'
import Gameselected from './Gameselected'
import Header from './Header'

 class Layout extends Component {
  constructor () {
    super()
    this.state = {
      nfldata:nfldata,
      gameSelected:[],
    }
  }

// changes gameslected object based on users input of Risk bet in gameSelected.js
  handleBetRisk= (item, win,bet) =>{
      this.setState(state => ({
        gameSelected: state.gameSelected.map(i => {
          if (i === item) {
            return { ...i, win: win, risk:bet};
          } else {
            return i;
          }
        })
      }));
      }

//Loops through the nfl data and displays all games for spread, moneyline, and total.
gameLoopNfl = ()=>{
    return this.state.nfldata.map((item)=>{
      return(
          <div className="games-container" key ={item.ID}>
                <div className="games match-time">
                    <h5>{this.convertTime(item.MatchTime)}</h5>
                </div>
                <div className ="gamelist" >
                    <div className ="games teams">
                        <h5 className="hometeam">{item.AwayTeam}</h5>
                    </div>
                    <h5 className="spread" onClick={(e)=>this.wagersAwaySpread(item)}>{item.Odds[0].PointSpreadAway} ({item.Odds[0].PointSpreadAwayLine})</h5>
                    <h5 className="moneyline" onClick={(e)=>this.wagersAwayMoneyLine(item)}>{item.Odds[0].MoneyLineAway}</h5>
                    <h5 className="total" onClick={(e)=>this.wagersAwayTotalOver(item)}>0 {item.Odds[0].TotalNumber} ( {item.Odds[0].OverLine} )</h5>
                </div>
                <div className ="gamelist" >
                    <div className ="games teams">
                        <h5 className="hometeam">{item.HomeTeam}</h5>
                    </div>
                    <h5 className="spread" onClick={(e)=>this.wagersHomeSpread(item)}>{item.Odds[0].PointSpreadHome} ({item.Odds[0].PointSpreadHomeLine})</h5>
                    <h5 className="moneyline" onClick={(e)=>this.wagersHomeMoneyLine(item)}>{item.Odds[0].MoneyLineHome}</h5>
                    <h5 className="total" onClick={(e)=>this.wagersHomeTotalUnder(item)}>U {item.Odds[0].TotalNumber} ( {item.Odds[0].UnderLine} )</h5>
                </div>

          </div>
      )
    })
}

//converts UTC to PST game time
  convertTime =(convert)=>{
      let date = new Date(convert);
    return date.toLocaleString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
  }

//is called from gameSelected.js which passes in the item to cancel a bet.
  cancelBet =(name)=>{
    this.setState({
       gameSelected: this.state.gameSelected.filter(el => el !== name)
    })
  }

//NFL Home Teams
    wagersHomeSpread = (item)=>{
      let currentWagers = this.state.gameSelected
      let line =item.Odds[0].PointSpreadHome
      let juice =item.Odds[0].PointSpreadHomeLine
      let teamChosen=item.HomeTeam;
      let matchTime=item.MatchTime;
      let currentBet ={
      ID:item.ID,
      Details:item.Details,
      teamChosen:teamChosen,
      wagerType:"spread",
      juice:juice,
      line:line,
      matchTime:matchTime,
      risk:'',
      win:''

      }
      let allBets = [...currentWagers, currentBet]
        let allUniqueBets = [...new Set(allBets.map(a => a))];
      this.setState({
        gameSelected:allUniqueBets
      })
    }
    wagersHomeMoneyLine = (item)=>{
      let currentWagers = this.state.gameSelected
      let line =item.Odds[0].MoneyLineHome
      let juice =item.Odds[0].MoneyLineHome
      let teamChosen=item.HomeTeam;
      let matchTime=item.MatchTime;
      let currentBet ={
      ID:item.ID,
      Details:item.Details,
      teamChosen:teamChosen,
      wagerType:"moneyline",
      juice:juice,
      line:line,
      matchTime:matchTime,
      risk:'',
      win:''
      }
      let allBets = [...currentWagers, currentBet]
        let allUniqueBets = [...new Set(allBets.map(a => a))];
      this.setState({
        gameSelected:allUniqueBets
      })
    }
    wagersHomeTotalUnder = (item)=>{
      let currentWagers = this.state.gameSelected
      let line =item.Odds[0].TotalNumber
      let juice =item.Odds[0].UnderLine
      let teamChosen=item.HomeTeam;
      let matchTime=item.MatchTime;;
      let currentBet ={
      ID:item.ID,
      Details:item.Details,
      teamChosen:"under",
      wagerType:"total",
      juice:juice,
      line:line,
      matchTime:matchTime,
      risk:'',
      win:''

      }
      let allBets = [...currentWagers, currentBet]
        let allUniqueBets = [...new Set(allBets.map(a => a))];
      this.setState({
          gameSelected:allUniqueBets
      })
    }
  // NFL Away teams
  wagersAwaySpread = (item)=>{
    let currentWagers = this.state.gameSelected
    let line =item.Odds[0].PointSpreadAway
    let juice =item.Odds[0].PointSpreadAwayLine
    let teamChosen=item.AwayTeam;
    let matchTime=item.MatchTime;
    let currentBet ={
    ID:item.ID,
    Details:item.Details,
    teamChosen:teamChosen,
    wagerType:"spread",
    juice:juice,
    line:line,
    matchTime:matchTime,
    risk:'',
    win:''
    }
    let allBets = [...currentWagers, currentBet]
      let allUniqueBets = [...new Set(allBets.map(a => a))];
    this.setState({
      gameSelected:allUniqueBets
    })
  }
  wagersAwayMoneyLine = (item)=>{
      let currentWagers = this.state.gameSelected
    let line =item.Odds[0].MoneyLineAway
    let juice =item.Odds[0].MoneyLineAway
    let teamChosen=item.AwayTeam;
    let matchTime=item.MatchTime;
    let currentBet ={
    ID:item.ID,
    Details:item.Details,
    teamChosen:teamChosen,
    wagerType:"moneyline",
    juice:juice,
    line:line,
    matchTime:matchTime,
    risk:'',
    win:'',
    risk:'',
    win:''
    }
    let allBets = [...currentWagers, currentBet]
      let allUniqueBets = [...new Set(allBets.map(a => a))];
    this.setState({
      gameSelected:allUniqueBets
    })
  }
  wagersAwayTotalOver = (item)=>{
    let currentWagers = this.state.gameSelected
    let line =item.Odds[0].TotalNumber
    let juice =item.Odds[0].OverLine
    let teamChosen=item.AwayTeam;
    let matchTime=item.MatchTime;

    let currentBet ={
    ID:item.ID,
    Details:item.Details,
    teamChosen:"over",
    wagerType:"total",
    juice:juice,
    line:line,
    matchTime:matchTime,
    risk:'',
    win:''
    }
    let allBets = [...currentWagers, currentBet]
      let allUniqueBets = [...new Set(allBets.map(a => a))];
    this.setState({
      gameSelected:allUniqueBets
    })
  }


  render () {
    return (
      <div className='app-container'>
        <Header />
        <Nav />
        <Mlb gameLoopNfl={this.gameLoopNfl}/>
        <Gameselected gameSelected={this.state.gameSelected}
         cancelBet={this.cancelBet}
         wagers={this.state.wagers}
         handleBetRisk={this.handleBetRisk}
         convertTime={this.convertTime}/>
    </div>


    )
  }
}
const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
