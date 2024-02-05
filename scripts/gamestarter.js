function startGame(url) {
    if ($("#activityCloak").is(":checked")) {
      var url = $("#cloakurl").val() || "http://classroom.google.com";
      var clasroomwindow = window.open(url, "ActivityCloakWindow");
    }
  
    var blankData = `<!DOCTYPE html>
  <html>
  
  <head>
  </head>
  
  <body>
      <iframe src="${url}"
          style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden;">
          Your browser doesn't support iframes
      </iframe>
      <script>
          window.onbeforeunload = function () {return false;}
      </script>
  </body>



      <div id="options-container">
        <button onclick="switchToGames()">Games</button>
        <button onclick="openSettings()">Settings</button>
    </div>
    <script>
        function switchToGames() {
  location.href = "https://aizertechahs.github.io/Goguardian-Bypasser/Home";
        }

        function openSettings() {
  location.href = "https://aizertechahs.github.io/Goguardian-Bypasser/Settings";
        }
    </script>
    <style>

        #options-container {
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: #0b0c0f;
            padding: 10px;
            border-radius: 10px 10px 0 0;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
        }

        #options-container button {
            margin: 0 10px;
            padding: 5px 10px;
            background-color: #22ff00;
            border: none;
            border-radius: 5px;
            color: #3a3b3a;
            cursor: pointer;
        }
    </style>

    
  </html>`;
  
    var ggwindow = window.open("", "Loading...", "width=1920,height=1080");
  
    ggwindow.document.write(blankData);
  }
  
  function Link1(url) {
    var section = document.getElementById("confirm");
    section.style.display = "block";
    var button = document.getElementById("confirm-yes");
  
    button.onclick = function () {
      section.style.display = "none";
      startGame(url);
    };
  }
