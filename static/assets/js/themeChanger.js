function changeTheme(theme){
    localStorage.setItem('currentTheme', theme)
    var colorTheme;
    
    switch(theme) {
        case 'dark':
            var colorTheme = ['#0b0c0f', '#22ff00', '#3a3b3a', '#000000'];
            break;

        case 'light':
            var colorTheme = ['#f2f3f4', '#000000', '#3a3b3a', '#000000'];
            break;
    }

    var style;
    var output = `
    :root{
        --main-background: ${colorTheme[0]};
        --main-fonts-color: ${colorTheme[1]};
        --main-tab-bar-color: ${colorTheme[2]};
        --main-header-background: ${colorTheme[3]};
        --main-font-family: 'Poppins', sans-serif;
    }`;

    if (document.head.querySelector('#root-changer') !== null) {
        var style = document.getElementById("root-changer");
        style.innerHTML = output;

    } else {
        var style = document.createElement('style');
        style.id = 'root-changer';  
        style.textContent = output;
        document.head.appendChild(style);
    }
}

const storedTheme = localStorage.getItem('currentTheme');
if (storedTheme) {
    changeTheme(localStorage.getItem('currentTheme'));
}
