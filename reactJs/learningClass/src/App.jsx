import React from 'react'
import './App.css'
import Header from './components/Header'
import Greeting from './components/Greeting'

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header username='stains' />
        <Greeting />
      </div>
    )
  }
}
