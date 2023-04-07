import React from 'react'
import './App.css'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      count : 0
    }
    this.add = this.add.bind(this)
    this.sub = this.sub.bind(this)
  }
 

  add() {
    this.setState(prev => {
      return{
        count : prev.count + 1
      }
    })
  }

  sub() {
    this.setState(prev =>{
      return{
        count:prev.count - 1 
      }
    })
  }


  render(){
    return(
      <div className="counter">
            <button className="counter--minus" onClick={this.sub}>–</button>
            <div className="counter--count">
                <h1>{this.state.count}</h1>
            </div>
            <button className="counter--plus" onClick={this.add}>+</button>
      </div>
    )
  }
}
