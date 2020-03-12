const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    const initPlayers = players => {
        for (var i = 0; i < PLAYERS.length; i++) {
            var players = {
                name: PLAYER[i],
                strength: getRandomStrength(),
                image: "./images/super-" + (i + 1) + ".png",
                type: "hero|villan"
            };
            detailedPlayer.push(players);
            console.log(detailedplayers);
        }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    let random = Math.floor(Math.random() * 10 + 1);
    return random;
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    var fragment = "";
    for (var i = 0; i < PLAYERS.length; i++) {

        fragment = `
            <div class="player">
            <img src="${detailedPlayers[i].image}" alt = "characters">
            <h4> ${detailedPlayers[i].name}</h4>
            <h1>${detailedPlayers[i].strength}</h1>
            </div>
             `;

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}