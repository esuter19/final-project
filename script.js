require(["esri/Map", "esri/views/MapView", "esri/WebMap"], function (Map, MapView, WebMap) {
        var map = new Map({
          basemap: "topo-vector"
        });
        
        var wm = new WebMap({
          portalItem: {
            id: "9e4a2dda743b44faa7b9b79f648bbc9e"
          }
        });
  
        var view = new MapView({
          container: "viewDiv",
          map: wm,
          zoom: 2,
          center: [0, 0] // longitude, latitude
        });

      function addLayer(layer){
        map.add(layer);
      }
      
      function rejection(error){
        console.log("Layer failed to load: ", error);
      }
});
