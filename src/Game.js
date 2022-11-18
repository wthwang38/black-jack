import React from 'react';
import { useState } from 'react';

const Game = () => {

// useEffect to first load deck
// then every time Start New Game is clicked, reset deck via dependency array

const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A",]
const suit = ["♠️", "♥️", "♣️", "♦️"]
const initialDeck = []  

for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < suit.length; j++) {
        initialDeck.push({ "value": value[i], "suit": suit[j] })
    }
}
console.log(initialDeck)

let currentIndex = initialDeck.length, randomIndex;
let shuffledDeck = shuffle(initialDeck)
const [playDeck, setPlayDeck] = useState(shuffledDeck)
const [playerTotal, setPlayerTotal] = useState(0)
const [houseTotal, setHouseTotal] = useState(0)
const [playerCardOne, setPlayerCardOne] = useState([])
const [playerCardTwo, setPlayerCardTwo] = useState([])
const [houseCardOne, setHouseCardOne] = useState([])
const [houseCardTwo, setHouseCardTwo] = useState([])

function shuffle(deck) {
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [ deck[currentIndex], deck[randomIndex] ] = [ deck[randomIndex], deck[currentIndex] ];
    }

    return deck
}
console.log(playDeck)

const calculateTotal = (cardOne, cardTwo) => {
    console.log(cardOne, cardTwo)
    let valueOfFirst = cardOne.value
    let valueOfSec = cardTwo.value

    if (valueOfFirst === "J" || valueOfFirst === "Q" || valueOfFirst === "K") {
        valueOfFirst = 10
    }
    if (valueOfSec === "J" || valueOfSec === "Q" || valueOfSec === "K") {
        valueOfSec = 10
    }
    if (valueOfFirst === "A") {
        valueOfFirst = 11
    }
    if (valueOfSec=== "A") {
        valueOfSec = 11
    }
    
    return valueOfFirst + valueOfSec
}

const initializeDeal = () => {
    // Reshuffle deck
    setPlayDeck(shuffledDeck);

    const [ card1, card2 ] = [ playDeck.pop(), playDeck.pop() ];
    setPlayerCardOne(card1)
    setHouseCardOne(card2)
    
    const [ card3, card4 ] = [ playDeck.pop(), playDeck.pop() ];
    setPlayerCardTwo(card3)
    setHouseCardTwo(card4)

    setPlayerTotal(calculateTotal(card1, card3))
    setHouseTotal(calculateTotal(card2, card4))
    console.log(playDeck)
}
// console.log(playDeck.shift())


function getCard(state) {
    // consider playDeck.pop() for O(1) time vs playDeck.shift() which is O(n) time
    const card = playDeck.pop()
    // const card = playDeck.shift()
    state(card)
}

return (
    <div>
        the Game
        <br/>
            <button onClick={() => initializeDeal()}>Start New Game</button>
        <br/><br/>
        <div>Player Hand: <br/>
            {playerCardOne.value}{playerCardOne.suit} &nbsp; {playerCardTwo.value}{playerCardTwo.suit} 
        </div>

        <div>Player total: {playerTotal}</div>
        <button onClick={() => getCard()}>Hit</button>
        <button>Stand</button>
        <br/><br/>
        <div>House Hand: <br/>
            {houseCardOne.value}{houseCardOne.suit} &nbsp; {houseCardTwo.value}{houseCardTwo.suit} 
        </div>
        <div>House total: {houseTotal}</div>
    </div>
)
}
export default Game;

