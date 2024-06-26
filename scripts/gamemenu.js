function displayGameMenu(elementDiv, games) {
    var img;
    var name;
    var gameLink;
    var game_menu = document.getElementById(elementDiv);

    for (var i in games) {
        if (games[i][0] === '') {
            name = 'Blank';
        } else {
            name = games[i][0];
        }

        if (games[i][1] == '') {
            img = 'Img/BlankImage.png';
        } else {
            img = games[i][1];
        }

        if (games[i][2] == '') {
            gameLink = '';

        } else {
            gameLink = `Link1('${games[i][2]}')`;
        }
        
        var embeded = `
        <br>
        <div class="card" id="searchMessage" onclick="${gameLink}">
            <img src="${img}">
            <p class="work-content">${name}</p>
        </div>`;
        
        game_menu.insertAdjacentHTML('beforeend', embeded);
    }
}

function filterGames() {
    document.getElementById('games-menu').innerHTML = '';
    var filterValue = document.getElementById('searchApps').value.toUpperCase();
    let filteredGames = availableGames.filter(function(game){
        return game[0].toUpperCase().indexOf(filterValue) > -1;
    });
    displayGameMenu('games-menu', filteredGames);
}

availableGames = [
    ['Smash Karts', 'Img/SmashKarts.png', 'https://smashkarts.io/'],
    ['Tag', 'Img/Tag.png', 'https://just-fall.github.io/j0/tag'],
    ['Zombs Royale', 'Img/ZombsRoyale.png', 'https://zombsroyale.io/'],
    ['Kirka.io', 'Img/Kirka.png', 'https://kirka.io/'],
    ['1v1.lol', 'Img/1V1.png', 'https://1v1.lol/'],
    ['Diep.io', 'https://aizertechahs.github.io/Images/Diep.png', 'https://diep.io'],
    ['Defly.io', 'https://aizertechahs.github.io/Images/Defly.png', 'https://defly.io/'],
    ['Test', '', ''],
    ['Potty Racers', 'Img/PottyRacers.png', 'https://games.crazygames.com/en_US/potty-racers/index.html?v=1.269'],
    ['Slither.io', 'Img/Slither.png', 'http://slither.io/'],
    ['City Car Simulator', 'Img/CityCar.png', 'https://games.crazygames.com/en_US/city-car-driving-simulator-ultimate/index.html?v=1.267'],
    ['Shadow Browser', '', 'https://shadowshogun1.shogun.ca/'],
    ['Roblox', 'Img/Roblox.png', 'https://acb.caculatorgeo.one/demo'],
    ['FNF B Side', 'Img/fnf-b-side-remix.png', 'https://tbg95.github.io/fnf-b-sides-remixes/game.html'],
    ['Infinite Craft', 'Img/NealFun.png', 'https://neal.fun/infinite-craft/'],
    ['Slow Roads', 'Img/SlowRoads.png', 'https://slowroads.io/'],
    ['ELectricMan2', 'Img/ElectricMan2.png', 'https://games.crazygames.com/en_US/electric-man/index.html'],
    ['Awesome Pirates', 'Img/AwesomePirates.png', 'https://www.gameflare.com/embed/awesome-pirates/'],
];

availableGames.sort(function(a, b) {
    return a[0].localeCompare(b[0]);
});

window.onload = function() {   
    displayGameMenu('games-menu', availableGames);
};
