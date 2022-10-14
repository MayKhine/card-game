import { stringify } from "querystring"

class Deck {
    cards: Array<Card>
    constructor() {
        this.cards = []
        // const cards: Card[]
        // const cards = new Array<Card>()
        // const cards: Array<Card> = []

        const suitArr = ['spade', 'club', 'heart', 'diamond']
        for (let suitIndex = 0; suitIndex < suitArr.length; suitIndex++) {
            for (let val = 1; val < 14; val++) {
                const card = new Card(suitArr[suitIndex], val)
                this.cards.push(card)
            }
        }
    }

    toString(): string {

        return this.cards.map((card) => {
            return card.toString()
        }).join(', ')
    }

    shuffle() {

    }
}
class Card {
    // card has number and suite 
    //spade Ace = S,1
    suit: string
    val: number

    constructor(suit: string, val: number) {
        this.suit = suit
        this.val = val
    }

    toString(): string {
        return this.suit + ': ' + this.val
    }
}

const main = () => {
    const deck = new Deck()
    console.log(deck.toString())
}
main()