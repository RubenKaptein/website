const map3 = L.map('map3').setView([52.6646, 5.6014], 12); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map3);


L.marker([52.6646, 5.6014]).addTo(map3)
    .bindPopup('Urk, het mooiste vissersdorp')
    .openPopup();


fetch('https://api.pdok.nl/bzk/locatieserver/search/v3_1/suggest?q=Urk')
    .then(response => response.json())
    .then(data => {
        const id = data.response.docs[0].id;
        return fetch(`https://api.pdok.nl/bzk/locatieserver/search/v3_1/lookup?id=${id}`);
    })
    .then(response => response.json())
    .then(data => {
        const wkt = data.response.docs[0].geometrie_ll; 
        const geojson = Terraformer.WKT.parse(wkt); 

        
        L.geoJSON(geojson).addTo(map3);
    })
    .catch(error => console.error('Fout bij het ophalen van de gemeentegrens:', error));


function createMap(container, center, zoom) {
    return new maplibregl.Map({
        container: container,
        style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json', 
        center: center,
        zoom: zoom
    });
}

function addMarker(map, coordinates, text) {
    new maplibregl.Marker()
        .setLngLat(coordinates)
        .setPopup(new maplibregl.Popup().setText(text))
        .addTo(map);
}

function addPolygon(map) {
    const polygon = {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [[
              [
                5.223015277364226,
                52.35675750679175
              ],
              [
                5.222847300503929,
                52.356407956742004
              ],
              [
                5.223207498306493,
                52.356339738633636
              ],
              [
                5.223378072747863,
                52.3566898180419
              ],
              [
                5.223015277364226,
                52.35675750679175
              ]
            ]]
        }
    };
    map.on('load', function () {
        map.addSource('layer2', { type: 'geojson', data: polygon });
        map.addLayer({
            id: 'layer2',
            type: 'fill',
            source: 'layer2',
            layout: {},
            paint: { 'fill-color': '#0000FF', 'fill-opacity': 0.5 }
        });
    });
}

const map2 = createMap('map2', [5.2231389, 52.3568611], 14);
addMarker(map2, [5.2231389, 52.3564611], 'Aeres Hogeschool Almere');
addPolygon(map2);


const map1 = L.map('map1').setView([52.6646, 5.6014], 12); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

L.marker([52.6646, 5.6014]).addTo(map1)
    .bindPopup('Urk, het mooiste vissersdorp')
    .openPopup();