    window.onload = function () {
    if ($("#activityCloak").is(":checked")) {
      var url = $("#cloakurl").val() || "http://classroom.google.com";
      var clasroomwindow = window.open(url, "ActivityCloakWindow");
    }
  
    var blankData = `
    <!DOCTYPE html>
  <html>
  <body>
      <iframe src="https://aizertechahs.github.io/Goguardian-Bypasser/Link/var"
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
  }

/*
    window.onload = function () {
    if ($("#activityCloak").is(":checked")) {
      var url = $("#cloakurl").val() || "http://classroom.google.com";
      var clasroomwindow = window.open(url, "ActivityCloakWindow");
    }
  
    var blankData = `
    <!DOCTYPE html>
  <html>
  <body>
      <iframe src="https://aizertechahs.github.io/Goguardian-Bypasser/Link/var"
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
  }
*/
