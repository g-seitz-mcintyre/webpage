const confidentialProject = document.getElementById("confidential")

function notAllowed() {
    alert('No permission granted.');
  }

confidentialProject.addEventListener('click', notAllowed);