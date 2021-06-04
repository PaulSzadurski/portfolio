// mobile nav
const openMenu = () => {
  document.getElementById("mobileNav").style.top = "0";
}

const closeMenu = () => {
  document.getElementById("mobileNav").style.top = "-100%";
}

// project carousel
let projectIndex = 1 

const projectMove = (n) => {
  showProject(projectIndex += n);
}

const showProject = (n) => {
  let projects = document.getElementsByClassName("projectCarousel");
  let currentProject = document.getElementById("projectNumber");

  if (n > projects.length) {
    projectIndex = 1
  }

  if (n < 1) {
    projectIndex = 4;
  }

  for (i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }

  projects[projectIndex - 1].style.display = "flex";

  while (currentProject.hasChildNodes()) {
    currentProject.removeChild(currentProject.firstChild);
  }

  let newProject = document.createTextNode(projectIndex);

  currentProject.appendChild(newProject);
}

showProject(projectIndex);









