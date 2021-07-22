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
            description: 'Increase Strenght'
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

const cardTemplate = `
<ul>
    <li>${card.id}</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
</ul>`;

containerDisplay.innerHTML = cardTemplate;

