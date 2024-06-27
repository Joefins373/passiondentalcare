const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // Unobserve the element after it has been shown
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden1, .hidden2");
hiddenElements.forEach((el) => observer.observe(el));

// Toggle menu functionality
var toggleOpen = document.getElementById("toggleOpen");
var toggleClose = document.getElementById("toggleClose");
var collapseMenu = document.getElementById("collapseMenu");

function handleClick() {
  if (collapseMenu.style.display === "block") {
    collapseMenu.style.display = "none";
  } else {
    collapseMenu.style.display = "block";
  }
}

toggleOpen.addEventListener("click", handleClick);
toggleClose.addEventListener("click", handleClick);
