function displayGameMenu(games) {
    var game_menu = document.getElementById('games-menu');

    for (var i in games) {
        var embeded = `
        <div class="card" onclick="Link1('${games[i][2]}');">
            <img src="${games[i][1]}">
            <p class="work-content">${games[i][0]}</p>
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
    ['Diep.io', 'https://aizertechahs.github.io/Images/Diep.png', 'https://diep.io'],
    ['Defly.io', 'https://aizertechahs.github.io/Images/Defly.png', 'https://defly.io/'],
    ['Test', 'Img/BlankImage.png', ''],
];

availableGames.sort(function(a, b) {
    return a[0].localeCompare(b[0]);
});

window.onload = function() {   
    displayGameMenu(availableGames);
};