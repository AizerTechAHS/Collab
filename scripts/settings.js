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

function tabCloak() {
  var newTitle = localStorage.getItem('cloakedTitle');
  var newIcon = localStorage.getItem('cloakedIcon');

  if (newTitle === null || newTitle === '') {
    alert('No Cloak Detected. Please select one in settings.');
  } else {
    localStorage.setItem('tabTitle', newTitle);
    localStorage.setItem('tabIcon', newIcon);
    document.title = newTitle;
    var icon = document.querySelector('link[rel="icon"]');
    icon.setAttribute('href', newIcon);
  }
}

  function disableTabCloak() {
    var newTitle = 'Aizer Tech';
    var newIcon = 'NOIMAGEHEREYET';
  
    localStorage.setItem('tabTitle', newTitle);
    localStorage.setItem('tabIcon', newIcon);
  
    document.title = newTitle;
    var icon = document.querySelector('link[rel="icon"]');
    icon.setAttribute('href', newIcon);
  }

(function () {
  var defaultTitle = 'Aizer Tech';
  var defaultIcon = 'NOIMAGEHEREYET';

  var storedTitle = localStorage.getItem('tabTitle');
  var storedIcon = localStorage.getItem('tabIcon');

  var newTitle = storedTitle || defaultTitle;
  var newIcon = storedIcon || defaultIcon;

  var icon = document.querySelector('link[rel="icon"]');
  if (icon) {
    icon.setAttribute('href', newIcon);
  } else {
    console.log('Tab Cloak Disabled');
    document.title = defaultTitle;
  }

  if (storedTitle) {
    document.title = newTitle;
  }
})();

// Check for Clickoff Cloaking
var defaultTitle = 'Aizer Tech';
var defaultIcon = 'NOIMAGEHEREYET';
var storedTitle = localStorage.getItem('tabTitle');
var storedIcon = localStorage.getItem('tabIcon');
var icon = document.querySelector('link[rel="icon"]');
var newTitle = storedTitle || defaultTitle;
var newIcon = storedIcon || defaultIcon;
  var clickoff = localStorage.getItem('clickoffCloak');
  if (clickoff === 'enabled') {
    document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    // Tab is hidden
    document.title = "Google Docs";
    icon.setAttribute('href', 'https://proxy-server-8hdw.vercel.app/assets/img/docs.ico');
  } else {
    // Tab is visible
    document.title = newTitle;
    icon.setAttribute('href', storedIcon);
  }
});
  } else {
    console.log('clickoff off');
  }
