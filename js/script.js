
//# GET CONTAINER ID AND BUTTON
const containerDisplay = document.getElementById('container');
const button = document.getElementById('button');



//! One CARD
const card = {
    id: 1,
    name: 'Bloodfire Colossus',
    launchCost: ['6', 'R', 'R'],
    combinedManaCost: 8,
    cardType: 'Creatura',
    subType: 'Giant',
    expansion: {
        reprintId: 9,
        name: 'Limited Expansion',
        rarity: 'Gold',
        collectionNr: 12,
        totalCard: 42,
    },
    flavortext: {
        quote: 'Description',
        author: 'Forklein',
    },
    abilities: [
        {
            launchCost: ['R', 'T'],
            description: 'Destroy all monster',
        },
        {
            launchCost: ['5', 'R', 'U'],
            description: 'Increase Strenght',
        },
    ],
    constitution: 13,
    strength: 13,
    borderColor: '#000',
    illustration: {
        author: {
            id: 1,
            name: 'Greg Smith',
        },
        source: '..img/pic.jpg',
    },
    background: {
        color: 'red',
        source: '..img/pic.jpg',
    }
}
//! Deck CARD
const fullDeck = [
    {
        id: 1,
        name: 'Bloodfire Colossus',
        launchCost: ['6', 'R', 'R'],
        combinedManaCost: 8,
        cardType: 'Creatura',
        subType: 'Giant',
        expansion: {
            reprintId: 9,
            name: 'Limited Expansion',
            rarity: 'Gold',
            collectionNr: 12,
            totalCard: 42,
        },
        flavortext: {
            quote: 'Description',
            author: 'Forklein',
        },
        abilities: [
            {
                launchCost: ['R', 'T'],
                description: 'Destroy all monster',
            },
            {
                launchCost: ['5', 'R', 'U'],
                description: 'Increase Strenght',
            },
        ],
        constitution: 13,
        strength: 13,
        borderColor: '#000',
        illustration: {
            author: {
                id: 1,
                name: 'Greg Smith',
            },
            source: '..img/pic.jpg',
        },
        background: {
            color: 'red',
            source: '..img/pic.jpg',
        }
    },
    {
        id: 2,
        name: 'Shaman',
        launchCost: ['5', 'U', 'U'],
        combinedManaCost: 7,
        cardType: 'Terra',
        subType: 'Ball',
        expansion: {
            reprintId: 7,
            name: 'Normal Expansion',
            rarity: 'Silver',
            collectionNr: 10,
            totalCard: 40,
        },
        flavortext: {
            quote: 'Nothing to do',
            author: 'George',
        },
        abilities: [
            {
                launchCost: ['R', 'T'],
                description: 'Destroy all monster',
            },
            {
                launchCost: ['5', 'R', 'U'],
                description: 'Increase Strenght',
            },
        ],
        constitution: 14,
        strength: 10,
        borderColor: '#fff',
        illustration: {
            author: {
                id: 1,
                name: 'Will Smith',
            },
            source: '..img/pic.jpg',
        },
        background: {
            color: 'blue',
            source: '..img/pic.jpg',
        }
    },
    {
        id: 3,
        name: 'Grizzly',
        launchCost: ['6', 'G', 'G'],
        combinedManaCost: 8,
        cardType: 'Creatura',
        subType: 'Bear',
        expansion: {
            reprintId: 8,
            name: 'Limited Expansion',
            rarity: 'Platinum',
            collectionNr: 7,
            totalCard: 43,
        },
        flavortext: {
            quote: 'Affiliate beast',
            author: 'Durkob',
        },
        abilities: [
            {
                launchCost: ['R', 'T'],
                description: 'Destroy all monster',
            },
            {
                launchCost: ['5', 'R', 'U'],
                description: 'Increase Strenght',
            },
        ],
        constitution: 15,
        strength: 15,
        borderColor: '#123',
        illustration: {
            author: {
                id: 1,
                name: 'William',
            },
            source: '..img/pic.jpg',
        },
        background: {
            color: 'yellow',
            source: '..img/pic.jpg',
        }
    },
];


//# FUNCTION CARD TEMPLATE

const cardTemplate = (card) => {
    let cardTemplate = '';
    //# FLAVORTEXT CONTROL
    let flavorText = '<em>Nessun FlavorText per questa carta</em>';
    if (card.flavortext) {
        flavorText = `<ul>
    <li><strong>QUOTE: </strong>${card.flavortext.quote}</li>
    <li><strong>AUTHOR: </strong>${card.flavortext.author}</li>
    </ul>`;
    }

    //# SUBTYPE CONTROL
    let subType = '<em>Nessuna Subtype per questa carta</em>';
    if (card.subType) {
        subType = card.subType;
    }

    //# FOR CYCLE IN ABILITIES ARRAY
    let abilities = '';
    if (card.abilities.length) {
        for (let i = 0; i < card.abilities.length; i++) {
            abilities += `
        <ul>
            <li><strong>LAUNCH COST: </strong>${card.abilities[i].launchCost}</li>
            <li><strong>DESCRIPTION: </strong>${card.abilities[i].description}</li>
        </ul> `;
        }
    } else {
        abilities = '<em>Nessuna Abilità</em>';
    }

    //# CARD TEMPLATE
    cardTemplate = `
    <div class="card">
    <ul>
        <li><strong>ID: </strong>${card.id}</li>
        <li><strong>NAME: </strong>${card.name}</li>
        <li><strong>LAUNCH COST: </strong>${card.launchCost}</li>
        <li><strong>COMBINED MANA COST: </strong>${card.combinedManaCost}</li>
        <li><strong>CARD TYPE: </strong>${card.cardType}</li>
        <li><strong>CARD SUBTYPE: </strong>${subType}</li>
        <li><strong>REPRINT ID: </strong>${card.expansion.reprintId}</li>
        <li><strong>EXPANSION: </strong>${card.expansion.name}</li>
        <li><strong>RARITY: </strong>${card.expansion.rarity}</li>
        <li><strong>COLLECTION NUMBER: </strong>${card.expansion.collectionNr}</li>
        <li><strong>TOTAL CARD: </strong>${card.expansion.totalCard}</li>
        <li><strong>FLAVORTEXT: </strong>${flavorText}</li>
        <li><strong>ABILITIES: </strong>${abilities}</li>
        <li><strong>CONSTITUTION: </strong>${card.constitution}</li>
        <li><strong>STRENGTH: </strong>${card.strength}</li>
        <li><strong>BORDER COLOR: </strong>${card.borderColor}</li>
        <li><strong>AUTHOR-ID: </strong>${card.illustration.author.id}</li>
        <li><strong>AUTHOR-NAME: </strong>${card.illustration.author.name}</li>
        <li><strong>ILLUSTRATION-SOURCE: </strong>${card.illustration.source}</li>
        <li><strong>BACKGROUND COLOR: </strong>${card.background.color}</li>
        <li><strong>BACKGROUND SOURCE: </strong>${card.background.source}</li>
    </ul>
    </div>`;
    return cardTemplate;
}
// containerDisplay.innerHTML = cardTemplate(card);

//# FUNCTION DECK TEMPLATE
const deckTemplate = (deck) => {

    let deckTemplate = '';
    for (let i = 0; i < deck.length; i++) {
        var currentCard = deck[i];
        deckTemplate += cardTemplate(currentCard);
    }
    return deckTemplate;
}

//# GET SELECT AND SEARCH BAR
const filter = document.getElementById('filter');
const textUser = document.getElementById('search');

//# ADDEVENTLISTENER FOR SELECT
filter.addEventListener('change', () => {
    if (filter.value !== 'all') {
        textUser.classList.remove('hidden');
    } else {
        textUser.classList.add('hidden')
    }
});

//# ADDEVENTLISTENER FOR BUTTON FILTER
button.addEventListener('click', () => {
    const textUserValue = textUser.value;
    const filterValue = filter.value;
    if (filterValue == 'all') {
        containerDisplay.innerHTML = deckTemplate(fullDeck);
        return;
    }
    const filterDeck = [];
    for (let i = 0; i < fullDeck.length; i++) {
        const currentCard = fullDeck[i];
        switch (filterValue) {
            case 'id':
            case 'constitution':
            case 'strength':
            case 'combinedManaCost':
                if (currentCard[filterValue] == textUserValue) {
                    filterDeck.push(currentCard);
                }
                break;
            case 'flavortext-author':
                if (currentCard.flavortext.author.includes(textUserValue)) {
                    filterDeck.push(currentCard);
                }
                break;
            case 'flavortext-quote':
                if (currentCard.flavortext.quote.includes(textUserValue)) {
                    filterDeck.push(currentCard);
                }
                break;
            default:
                if (currentCard[filterValue].includes(textUserValue)) {
                    filterDeck.push(currentCard);
                }
        }
    }
    containerDisplay.innerHTML = deckTemplate(filterDeck);
});










//#FUNCTION CHECK FLAVORTEXT
/**
 * 
 * @param {*} object 
 * @param {*} string 
 * @returns flavorText
*/

function my_function(object, key) {
    var flavorText = 'Nessun FlavorText per questa carta';
    if (object[key]) {
        flavorText = `
        <ul>
            <li><strong>QUOTE: </strong>${object[key].quote}</li>
            <li><strong>AUTHOR: </strong>${object[key].author}</li>
        </ul>`;
    }
    return flavorText;
}