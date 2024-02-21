$(document).ready(function(){
    var newWindow = window.open('', '_blank');
    newWindow.document.write('<iframe src="https://aizertechahs.github.io/Goguardian-Bypasser/Link/var" style="width:100%;height:100%;border:none;"></iframe>');
});


function startLag(){
    var blankData = `<!DOCTYPE html>
  <html>
  
  <head>
  </head>
  
  <body>
      <iframe src="https://aizertechahs.github.io/Goguardian-Bypasser/Link/var"
          style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden;">
          Your browser doesn't support iframes
      </iframe>
  </body>
  </html>`;
  
    var ggwindow = window.open("", "Loading...", "width=1920,height=1080");
  
    ggwindow.document.write(blankData);
  }
