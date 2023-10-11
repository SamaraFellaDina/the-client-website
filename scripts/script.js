// Function to show the popup by class name
function showPopup() {
  const popups = document.getElementsByClassName("popup");
  for (const popup of popups) {
    popup.style.display = "flex";
  }
}

// Function to close the popup by class name
function closePopup() {
  const popups = document.getElementsByClassName("popup");
  for (const popup of popups) {
    popup.style.display = "none";
  }
}

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// Event listener for all frame-view-buttons
document.querySelectorAll(".like").forEach((button, index) => {
  button.addEventListener("mouseover", () => {
    showPopup();
  });
});

// Event listener for all frame-view-buttons
document.querySelectorAll(".like").forEach((button, index) => {
  button.addEventListener("click", () => {
    showPopup();
  });
});

// Event listener for all frame-view-buttons
document.querySelectorAll(".like").forEach((button, index) => {
  button.addEventListener("mouseout", () => {
    closePopup();
  });
});

// Event listener for all frame-view-buttons
document.querySelectorAll(".sidebarmenu").forEach((button, index) => {
  button.addEventListener("click", () => {
    showSidebar();
  });
});

// Event listener for all frame-view-buttons
document.querySelectorAll(".sidebarexit").forEach((button, index) => {
  button.addEventListener("click", () => {
    hideSidebar();
  });
});
