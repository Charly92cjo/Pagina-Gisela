var map = L.map("map").setView([-34.9768211, -67.6886061], 19);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-34.9769211, -67.6886261])
  .addTo(map)
  .bindPopup("Estudio Jurídico.<br>Gisela Durán.<br>Zamenoff 52")
  .openPopup();

console.log(`%cFeliz Cumpleaños Giiyoo!!! :-)`,"color:#00f;background:#000;padding:50px;border:3px solid #00f;font-family:Lobster")
