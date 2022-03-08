var estadoLicuadora = "apagada";
var blenderButton = document.getElementById("blender-button");
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonSonidoLicuadora = document.getElementById("blender-button__sound");

blenderButton.addEventListener("click", function () {
  if (estadoLicuadora == "apagada" && sonidoLicuadora.paused) {
    estadoLicuadora = "encendida";
    console.log("Me prendiste");
    licuadora.classList.add("active");
    sonidoLicuadora.play();
    botonSonidoLicuadora.play();
  } else {
    estadoLicuadora = "apagada";
    console.log("Me apagaste");
    licuadora.classList.remove("active");
    sonidoLicuadora.pause();
    botonSonidoLicuadora.play();
    sonidoLicuadora.currentTiem = 0;
  }
});
