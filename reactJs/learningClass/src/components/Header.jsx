import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome , {this.props.username}!</p>
            </header>
        )
    }
} 