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

$(document).ready(function () {
    // Check if a theme is stored in local storage
    var storedTheme = localStorage.getItem('selectedTheme');

    // Set the theme based on the stored value or default to 'light'
    if (storedTheme) {
        setTheme(storedTheme);
    } else {
        setTheme('light');
    }

    $('#theme-selector').on('change', function () {
        var selectedTheme = $(this).val();
        setTheme(selectedTheme);

        // Save the selected theme to local storage
        localStorage.setItem('selectedTheme', selectedTheme);
    });

    function setTheme(theme) {
        if (theme === 'light') {
            document.getElementById('theme-stylesheet').setAttribute('href', 'style/light.css');
        } else if (theme === 'dark') {
            $('#theme-stylesheet').attr('href', 'style/dark.css');
        }
    }
});
