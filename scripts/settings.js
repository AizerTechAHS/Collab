// leaveconf button check
*/
var eBlank = document.getElementById('enableCloak');
var dBlank = document.getElementById('disableCloak');

// Get the value from localStorage
var blankState = localStorage.getItem('aboutBlank');

// Set the initial disabled states based on localStorage
if (blankState === 'disabled' || blankState === '' || blankState === null) {
    dBlank.disabled = true;
    eBlank.disabled = false;
} else {
    dBlank.disabled = false;
    eBlank.disabled = true;
}

function driveCloak() {
    localStorage.setItem('cloakedTitle', 'My Drive - Google Drive');
    localStorage.setItem('cloakedIcon', 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png');
    tabCloak();
}

function docsCloak() {
    localStorage.setItem('cloakedTitle', 'Google Docs');
    localStorage.setItem('cloakedIcon', 'https://proxy-server-8hdw.vercel.app/assets/img/docs.ico');
    tabCloak();
}
function googleCloak() {
    localStorage.setItem('cloakedTitle', 'Google');
    localStorage.setItem('cloakedIcon', 'https://proxy-server-8hdw.vercel.app/assets/img/google.ico');
    tabCloak();
}
function classroomCloak() {
    localStorage.setItem('cloakedTitle', 'Classes');
    localStorage.setItem('cloakedIcon', 'https://proxy-server-8hdw.vercel.app/assets/img/classroom-icon.png');
    tabCloak();
}

function enableClickoffCloak() {
    localStorage.setItem('clickoffCloak', 'enabled');
    window.location.reload();
}

function disableClickoffCloak () {
    localStorage.setItem('clickoffCloak', 'disabled');
    window.location.reload();
}
