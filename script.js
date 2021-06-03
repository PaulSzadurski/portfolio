// mobile nav
const openMenu = () => {
  document.getElementById("mobileNav").style.top = "0";
}

const closeMenu = () => {
  document.getElementById("mobileNav").style.top = "-100%";
}


// project carousel
let projectIndex = 1 

const projectForward = (n) => {
  showProject(projectIndex += n);
}

const showProject = (n) => {
  let currentProject = document.getElementsByClassName("projectCarousel");
  let testV = document.getElementById("projectNumber");


  if (n > currentProject.length) {
    projectIndex = 1
  }

  if (n < 1) {
    projectIndex = 4;
  }

  for (i = 0; i < currentProject.length; i++) {
    currentProject[i].style.display = "none";
  }

  currentProject[projectIndex - 1].style.display = "flex";

  while (testV.hasChildNodes()) {
    testV.removeChild(testV.firstChild);
  }

  let testN = document.createTextNode(projectIndex);

  testV.appendChild(testN);
}

showProject(projectIndex);









