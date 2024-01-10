function displayGameMenu(games) {
    var game_menu = document.getElementById('games-menu');

    for (var i in games) {
        var embeded = `
        <div class="card" onclick="Link1('${games[i][2]}');">
            <img src="${games[i][1]}">
            <div class="work-content">${games[i][0]}</div>
        </div>`;
        
        game_menu.insertAdjacentHTML('beforeend', embeded);
    }
}

var availableGames = [
    ['Smash Karts', 'https://aizertechahs.github.io/Images/SmashKarts.png', 'https://smashkarts.io/'],
    ['ZombsRoyale', 'https://aizertechahs.github.io/Images/ZombsRoyale.png', 'https://zombsroyale.io/'],
    ['Kirka.io', 'https://aizertechahs.github.io/Images/Kirka.png', 'https://kirka.io/'],
    ['1v1.lol', 'https://aizertechahs.github.io/Images/1V1.png', 'https://1v1.lol/'],
    ['Phantom.lol', 'https://aizertechahs.github.io/Images/1V1.png', 'https://phantom.lol'],
    ['Test', 'Img/BlankImage.png', '']
    ['Test 1', 'Img/BlankImage.png', '']

];

displayGameMenu(availableGames);
