function updateLink() {
  var userInput = document.getElementById('userInput').value;
  var folderSelect = document.getElementById('folderSelect');
  var selectedFolder = folderSelect.options[folderSelect.selectedIndex].value;
  var baseUrl = 'https://kirka.io/games/';
  var linkDisplay = document.getElementById('linkDisplay');

  if (userInput && selectedFolder) {
    linkDisplay.href = baseUrl + selectedFolder + '~' + userInput;
    linkDisplay.textContent = linkDisplay.href;
  } else {
    linkDisplay.textContent = 'Please select a folder and enter a value.';
    linkDisplay.href = '#';
  }
}

function openUrl() {
  var linkDisplay = document.getElementById('linkDisplay');
  if (linkDisplay.href !== '#') {
  if ($("#activityCloak").is(":checked")) {
    var url = $("#cloakurl").val() || "http://classroom.google.com";
    var clasroomwindow = window.open(kirkaUrl, "ActivityCloakWindow");
  }

  var blankData = `<!DOCTYPE html>
  <html>

  <head>
  </head>

  <body>
    <iframe src="${linkDisplay}"
        style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden;">
        Your browser doesn't support iframes
    </iframe>
    <script>
        window.onbeforeunload = function () {return false;}
    </script>
  </body>
  </html>`;

  var ggwindow = window.open("", "Loading...", "width=1920,height=1080");

  ggwindow.document.write(blankData);
  } else {
    alert('Please select a folder and enter a value.');
  }
}
