var mapLibre = new maplibregl.Map({
  container: 'mapLibre',
  style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
  center: [5.6018, 52.6624],
  zoom: 13
});

new maplibregl.Marker()
  .setLngLat([5.6018, 52.6624])
  .setPopup(new maplibregl.Popup().setText('Fitis 34'))
  .addTo(mapLibre);

 var map = L.map('map').setView([52.350784, 5.264702], 13); 
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([52.350784, 5.264702]).addTo(map)
            .bindPopup('Aeres Hogeschool, Almere')
            .openPopup();

// GeoJSON
var mijnGeojson =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              [
                5.536707525185932,
                52.740742916137265
              ],
              [
                5.536707525185932,
                52.6106899466925
              ],
              [
                5.682287693725101,
                52.6106899466925
              ],
              [
                5.682287693725101,
                52.740742916137265
              ],
              [
                5.536707525185932,
                52.740742916137265
              ]
            ]
          ],
          "type": "Polygon"
        }
      }
    ]
  }

  // Kaart klaar met laden
  map.on('load', function () {
// voeg geojson bron toe
    map.addSource('Urk', {
      'type': 'geojson',
      'data': mijnGeojson
    });


        // stijl op die maponload
        map.addLayer({
          'id': 'geojson-polygon',
          'type': 'fill',
          'Urk': 'punten',
          'layout': {},
          'paint': {
          'fill-color': '#ff0000'
          }
        });