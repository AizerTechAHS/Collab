function changeTheme(theme) {
    if (window.location.hostname == 'aizertechahs.github.io') {
        indexUrl = '/Goguardian-Bypasser/';
    
      } else {
        indexUrl = '../';
    }
    document.getElementById('theme-stylesheet').href = `${indexUrl}style/${theme}.css`;
    localStorage.setItem('currentTheme', theme);
}

// Check if a theme is stored in local storage
const storedTheme = localStorage.getItem('currentTheme');
if (storedTheme) {
    changeTheme(storedTheme);
}
