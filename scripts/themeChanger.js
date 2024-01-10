function changeTheme(theme) {
    document.getElementById('theme-stylesheet').href = `https://aizertechahs.github.io/Goguardian/style/${theme}.css`;
    localStorage.setItem('currentTheme', theme);
}

// Check if a theme is stored in local storage
const storedTheme = localStorage.getItem('currentTheme');
if (storedTheme) {
    changeTheme(storedTheme);
}
