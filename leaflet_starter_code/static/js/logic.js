// Import data
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"
d3.json(queryURL).then(function(data) {
    console.log(data.features);

    //  Create a map object
    var myMap = L.map("map", {
        center: [39.742043, -104.991531],
        zoom: 4.5
      });

    // Add a tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(myMap);

    // Marker time!!
    // Create a new marker cluster group.
    var markers = L.markerClusterGroup();
    // Loop through the data.
    for (let i = 0; i < data.length; i++) {
        // Set the data location property to a variable.
        var location = data[i].geometry;
        // Check for the location property.
        if (location) {
      // Add a new marker to the cluster group, and bind a popup.
            var marker = L.marker([location.coordinates[1],location.coordinates[0]]);
            markers.addLayer(marker);
        }
  }
  // Add our marker cluster layer to the map.
  myMap.addLayer(markerGroup);
})