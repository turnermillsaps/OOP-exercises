class Card {
    constructor(val, suit) {
        this.val = val;
        this.suit = suit;
    }

    getImageUrl = () => {
        return `${this.val}_of_${suit}`
    }
}

class Hand {
    constructor() {
        this.cards = []
    }

    addCard = (Card) => {
        this.cards.push(Card);
    }

    getPoints = () => {
        let points = 0;
        this.cards.forEach((card) => {
            return points += card.val;
        })
        return points;
    }
}