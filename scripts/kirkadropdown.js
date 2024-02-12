document.addEventListener("DOMContentLoaded", function() {
  const infoContainer = document.getElementById("infoContainer");
  const infoBox = document.getElementById("infoBox");
  const closeBtn = document.getElementById("closeBtn");
  const infoText = infoContainer.textContent.trim();

  infoContainer.addEventListener("click", function() {
    infoBox.style.width = infoContainer.offsetWidth + "px";
    infoBox.style.height = infoContainer.offsetHeight + "px";
    infoBox.style.display = "block";
  });

  closeBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to infoContainer
    infoBox.style.display = "none";
  });

  document.addEventListener("click", function(event) {
    if (!infoContainer.contains(event.target) && !infoBox.contains(event.target)) {
      infoBox.style.display = "none";
    }
  });
});
