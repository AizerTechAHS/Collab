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
	/*
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      ggwindow.document.write(this.responseText);
      if ($('#selfDestruct').is(':checked')) {
        window.close();
        window.onbeforeunload = function() { };


      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
	*/
}




function Link1(url) {
  var section = document.getElementById('confirm');
  section.style.display = 'block';
  var button = document.getElementById('confirm-yes');

  button.onclick = function() {
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

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const currentTime = `${hours}:${minutes}:${seconds}`;
  var time = document.getElementById('time');
	time.innerHTML = currentTime;
}

setInterval(updateTime, 1000);


    document.getElementById("search-input").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
        }
    });

    function performSearch() {
        var searchQuery = document.getElementById("search-input").value;
        
        alert("Searching for: " + searchQuery);
    }
