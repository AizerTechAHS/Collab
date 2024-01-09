function startGame(url) {

  if ($('#activityCloak').is(':checked')) {

    var url = $("#cloakurl").val() || "http://classroom.google.com";
    var clasroomwindow = window.open(url, "ActivityCloakWindow");
  }

  var blankData = `<!DOCTYPE html>
<html>

<head>
</head>

<body>
	<iframe src="${url}"
		style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
		Your browser doesn't support iframes
	</iframe>
	<script>
		window.onbeforeunload = function () {return false;}
	</script>
</body>
</html>`;

  var ggwindow = window.open("", "Loading...", "width=1920,height=1080");

  ggwindow.document.write(blankData);
}




function Link1(url) {
  var section = document.getElementById('confirm');
  section.style.display = 'block';
  var button = document.getElementById('confirm-yes');

  button.onclick = function () {
    section.style.display = 'none';
    startGame(url);
  };
}

function showPopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
window.onload = showPopup;

// script.js

document.addEventListener('DOMContentLoaded', function() {
  const currentThemeIndex = parseInt(localStorage.getItem('themeIndex')) || 0;
  const themes = ['style/style.css', 'style/style-light.css'];
  const stylesheetLink = document.getElementById('theme-stylesheet');

  function applyTheme(themeIndex) {
    localStorage.setItem('themeIndex', themeIndex.toString());
    const newTheme = themes[themeIndex];
    stylesheetLink.href = newTheme;
  }

  // Initialize the theme on page load
  applyTheme(currentThemeIndex);

  // Function to toggle the theme
  function toggleStylesheet() {
    const newThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(newThemeIndex);
  }

  // Assign the toggleStylesheet function to a button click
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleStylesheet);
  }
});
