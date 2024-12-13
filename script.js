function webkit_open() {
    document.querySelector('.webkit-drop-down').classList.toggle("drop-drop");
}

function service_open() {
    document.querySelector('.service-drop-down').classList.toggle("drop-drop-1");
    if(window.screen.width < 1200)
      document.querySelector('.service-drop-down-1').classList.toggle("drop-drop-service");
    }

function open_item() {
    document.getElementById("hide").style.display = "block";
  }
  
  function close_item() {
    document.getElementById("hide").style.display = "none";
  }

