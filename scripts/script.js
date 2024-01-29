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
  function openWindow() {
    var win = window.open();   win.document.body.style.margin = '0';   win.document.body.style.height = '100vh';   var iframe = win.document.createElement('iframe');   iframe.style.border = 'none';   iframe.style.width = '100%';   iframe.style.height = '100%';   iframe.style.margin = '0';   iframe.src = window.location.href;   win.document.body.appendChild(iframe);
      }

function openSettings() {
  location.href = './Settings.html';
}
var submenuOpen = false;
var submenu2Open = false;

function toggleSubmenu(event) {
  var submenu = document.querySelector('.context-submenu');
  var submenuParent = document.querySelector('.with-submenu');

  if (submenuOpen) {
      submenu.style.display = 'none';
      submenuParent.classList.remove('open');
  } else {
      submenu.style.display = 'block';
      submenu.style.top = submenuParent.offsetTop + "px";
      submenu.style.left = (submenuParent.offsetLeft + submenuParent.offsetWidth) + "px";
      submenuParent.classList.add('open');
      event.stopPropagation(); 
  }

  submenuOpen = !submenuOpen;
}
function toggleSubmenu2(event) {
  var submenu2 = document.querySelectorAll('.context-submenu')[1];
  var submenuParent2 = document.querySelectorAll('.with-submenu')[1];

  if (submenu2Open) {
      submenu2.style.display = 'none';
      submenuParent2.classList.remove('open');
  } else {
      submenu2.style.display = 'block';
      submenu2.style.top = submenuParent2.offsetTop + "px";
      submenu2.style.left = (submenuParent2.offsetLeft + submenuParent2.offsetWidth) + "px";
      submenuParent2.classList.add('open');
      event.stopPropagation(); 
  }

  submenu2Open = !submenu2Open;
}
function showContextMenu(event) {
  event.preventDefault();
  var contextMenu = document.getElementById("contextMenu");
  contextMenu.style.left = event.clientX + "px";
  contextMenu.style.top = event.clientY + "px";
  contextMenu.style.display = "block";
}

function hideContextMenu() {
  var contextMenu = document.getElementById("contextMenu");
  contextMenu.style.display = "none";
  hideSubmenu();
  hideSubmenu2();
}

function hideSubmenu() {
  var submenu = document.querySelector('.context-submenu');
  submenu.style.display = 'none';
  submenuOpen = false;
}

function hideSubmenu2() {
  var submenu2 = document.querySelectorAll('.context-submenu')[1];
  submenu2.style.display = 'none';
  submenu2Open = false;
}
document.addEventListener("contextmenu", showContextMenu);
document.addEventListener("click", hideContextMenu);
document.addEventListener("click", function(event) {
  var contextMenu = document.getElementById("contextMenu");
  var submenu = document.querySelector('.context-submenu');

  if (!contextMenu.contains(event.target)) {
      hideContextMenu();
  } else if (!submenu.contains(event.target)) {
      hideSubmenu();
  }
});
