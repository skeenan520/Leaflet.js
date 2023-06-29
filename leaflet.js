//initialize the map and set its view to our chosen geographical coordinates and a zoom level
var map = L.map("map").setView([51.505, -0.09], 10);

//Tile layer
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 17,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // regular marker 
      var marker = L.marker([51.5, -0.09]).addTo(map);
      //circle marker
      var circle = L.circle([51.508, -0.11], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 500,
      }).addTo(map);
     //polygon marker
      var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ]).addTo(map);
      
      //Calling the markers
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
      circle.bindPopup("I am a circle.");
      polygon.bindPopup("I am a polygon.");
      
      //standalone popup, no symbol on map
      var popup = L.popup()
        .setLatLng([51.513, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(map);

        function onMapClick(e) {
          alert("You clicked the map at " + e.latlng);
      }
      
      map.on('click', onMapClick);