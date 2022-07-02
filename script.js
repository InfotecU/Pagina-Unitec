const mapa = document.querySelector("mapa")

let map = L.map('mapa').setView([-34.906744887628925, -57.94279074422511], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.9066305063711, -57.94279074422511]).addTo(map)
    .bindPopup('lab unitec')
    .openPopup();