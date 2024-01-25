function displayGameMenu(games) {
    var game_menu = document.getElementById('games-menu');

    for (var i in games) {
        var embeded = `
         <div class="card" onclick="Link1('${games[i][2]}');">
            <img src="${games[i][1]}">
            <p class="work-content">${games[i][0]}</p>
        </div>
        `;
        
        game_menu.insertAdjacentHTML('beforeend', embeded);
    }
}

var availableGames = [
    ['Smash Karts', 'Img/SmashKarts.png', 'https://smashkarts.io/'],
    ['Zombs Royale', 'Img/ZombsRoyale.png', 'https://zombsroyale.io/'],
    ['Kirka.io', 'Img/Kirka.png', 'https://kirka.io/'],
    ['1v1.lol', 'Img/1V1.png', 'https://1v1.lol/'],
    ['Diep.io', 'https://aizertechahs.github.io/Images/Diep.png', 'https://diep.io'],
    ['Defly.io', 'https://aizertechahs.github.io/Images/Defly.png', 'https://defly.io/'],
    ['Test', 'Img/BlankImage.png', ''],
    ['Shadow Browser', 'Img/BlankImage.png', 'https://shadowshogun1.shogun.ca/'],
    ['Roblox', 'Img/Roblox.png', 'https://acb.caculatorgeo.one/demo'],
];

availableGames.sort(function(a, b) {
    return a[0].localeCompare(b[0]);
});

window.onload = function() {   
    displayGameMenu(availableGames);
};
