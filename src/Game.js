import React from 'react';
import { useState } from 'react';
const Game = () => {
    const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace",]
    const suit = ["diamonds", "clubs", "hearts", "spades"]
    const initialDeck = []

    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < suit.length; j++) {
            initialDeck.push({ "value": value[i], "suit": suit[j] })
        }
    }

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
            [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
        }
            return deck
        }
        console.log(playDeck)

    const calculateTotal = (objectOne, objectTwo) => {
        console.log(objectOne, objectTwo)
        let valueOfFirst = objectOne.value
        let valueOfSec = objectTwo.value

        const total =  valueOfFirst + valueOfSec
        if (valueOfFirst === "Jack" || valueOfFirst === "Queen" || valueOfFirst === "King") {
            valueOfFirst = 10
        }
        if (valueOfSec === "Jack" || valueOfSec === "Queen" || valueOfSec === "King") {
            valueOfSec = 10
        }
        if (valueOfFirst === "Ace") {
            valueOfFirst = 11
        }
        if (valueOfSec=== "Ace") {
            valueOfSec = 11
        }

        console.log(total)
        return total
    }

    const initializeDeal = () => {
        setPlayerCardOne(playDeck[0])
        setHouseCardOne(playDeck[1])
        setPlayerCardTwo(playDeck[2])
        setHouseCardTwo(playDeck[3])
        setPlayerTotal(calculateTotal(playDeck[0], playDeck[2]))
        setHouseTotal(calculateTotal(playDeck[1], playDeck[3]))
    }
    // console.log(playDeck.shift())

    function getCard(state) {
        const card = playDeck.shift()
        state(card)
    }

    return (
        <div>
            the Game
            <br/>
            <button onClick={() => initializeDeal()}>Start New Game</button>
            <br/>
            <div>Player Card One: <br/>{playerCardOne.value} of {playerCardOne.suit} </div>
            <div>Player Card Two: <br/>{playerCardTwo.value} of {playerCardTwo.suit} </div>
            <div>Player total: {playerTotal}</div>
            <button onClick={() => getCard()}>Hit</button>
            <button>Stand</button>
            <div>House Card One: <br/>{houseCardOne.value} of {houseCardOne.suit} </div>
            <div>House Card One: <br/>{houseCardTwo.value} of {houseCardTwo.suit} </div>
            <div>House total: {houseTotal}</div>
        </div>
    )
}
export default Game;
