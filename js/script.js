const containerDisplay = document.getElementById('container');

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
    flavorText: {
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
let flavorText = '<em>Nessun FlavorText per questa carta</em>';
if (card.flavorText) {
    flavorText = `<ul>
    <li><strong>QUOTE: </strong>${card.flavorText.quote}</li>
    <li><strong>AUTHOR: </strong>${card.flavorText.author}</li>
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
        </ul>`;
    }
} else {
    abilities = '<em>Nessuna Abilità</em>';
}

//# CARD TEMPLATE
const cardTemplate = `
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
</ul>`;

containerDisplay.innerHTML = cardTemplate;

