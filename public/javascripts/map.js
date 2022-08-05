var map = L.map('main_map').setView([-34.8741119,-56.2024198], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


var marker = L.marker([-34.8741643,-56.2024252]).addTo(map);
var marker = L.marker([-34.8731824,-56.201401]).addTo(map);
var marker = L.marker([-34.8630651,-56.2113064]).addTo(map);
