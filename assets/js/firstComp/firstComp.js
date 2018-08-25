import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import nfldata from './data/nfldata.js'
import Nav from './Nav'
import Nfl from './Nfl'
import Gameselected from './Gameselected'
import Header from './Header'

export default class Layout extends Component {
  constructor () {
    super()
    this.state = {
      nfldata:nfldata,
      gameSelected:[],
    }
  }

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



  //
  // confirmedWagers = (item)=>{
  //   let currentState = [...this.state.gameSelected, item]
  //   let allUniqueBets = [...new Set(currentState.map(a => a))];
  //   this.setState({
  //     gameSelected:allUniqueBets
  //   })
  // }
  convertTime =(convert)=>{
    let date = new Date(convert);
  return date.toLocaleString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
  }

  handleChange =(name)=>{
    this.setState({
       gameSelected: this.state.gameSelected.filter(el => el !== name)
    })
  }


    gameSelected = (item)=>{
      let currentItem = this.state.gameSelected
      let currentState = [...this.state.gameSelected, item]
      let names = [...new Set(currentState.map(a => a))];
      this.setState({
        gameSelected:names
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
          <Nfl games={this.state.nfldata}
          gameSelected={this.gameSelected}
          convertTime={this.convertTime}
          wagersHomeSpread={this.wagersHomeSpread}
          wagersHomeMoneyLine={this.wagersHomeMoneyLine}
          wagersHomeTotalUnder ={this.wagersHomeTotalUnder}
          wagersAwaySpread={this.wagersAwaySpread}
          wagersAwayMoneyLine={this.wagersAwayMoneyLine}
          wagersAwayTotalOver ={this.wagersAwayTotalOver}
          convertTime={this.convertTime}
        />
          <Gameselected gameSelected={this.state.gameSelected}
          handleChange={this.handleChange}
           wagers={this.state.wagers}
           handleBetRisk={this.handleBetRisk}
           />
      </div>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
