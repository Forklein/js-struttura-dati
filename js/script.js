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

const containerDisplay = document.getElementById('container');

let abilities;
if (card.abilities.length) {
    for (let i = 0; i < card.abilities.length; i++) {
        abilities += `
        <ul>
            <li>${card.abilities[i].launchCost}</li>
            <li>${card.abilities[i].description}</li>
        </ul>`;
    }
} else {
    abilities = 'Nessuna Abilità';
}

const cardTemplate = `
<ul>
    <li>${card.id}</li>
    <li>${card.name}</li>
    <li>${card.launchCost}</li>
    <li>${card.combinedManaCost}</li>
    <li>${card.cardType}</li>
    <li>${card.subType}</li>
    <li>${card.expansion.reprintId}</li>
    <li>${card.expansion.name}</li>
    <li>${card.expansion.rarity}</li>
    <li>${card.expansion.collectionNr}</li>
    <li>${card.expansion.totalCard}</li>
    <li>${card.flavorText.quote}</li>
    <li>${abilities}</li>
</ul>`;

containerDisplay.innerHTML = cardTemplate;

