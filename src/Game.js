import React from 'react';
import { useState } from 'react';
const Game = ()=> {
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A",]
    const suits = ["diamond", "clubs", "hearts", "spades"]
    const deck = []

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            deck.push({ "value": values[i], "suit": suits[j] })
        }
    }
    

    const { playDeck, setPlayDeck } = useState([...deck])
    const {playerTotal, setPlayerTotal} = useState([])
    const {houseTotal, setHouseTotal} = useState([])
    
    const initializeGame = () => {

    }

    console.log(deck.pop)
    console.log(deck)


    function getCard(){
        
        const card = playDeck[Math.floor(Math.random()* deck.length-1)]
        return card
    }
   
    return (
        <div>
            the Game
            <div>Player hand: {playerTotal}</div>
            <button>Hit</button><button>Stand</button>
            <div>House hand: {houseTotal}</div>
        </div>
    )
}
export default Game;
