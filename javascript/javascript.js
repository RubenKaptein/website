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