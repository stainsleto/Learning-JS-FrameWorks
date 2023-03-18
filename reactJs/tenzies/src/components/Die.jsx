import React from 'react'

export default function Die(props){
    const styles= {
        backgroundColor : props.isHeld ? "#59E391" : "white"
    }
    return(
        <div className='die-face'  onClick={props.holdDice} style={styles}>
            <h1 className='dice-num'>{props.value}</h1>
        </div>
    )
}