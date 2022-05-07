require(["esri/Map", 
         "esri/views/MapView",  
         "esri/layers/Layer",
         "esri/layers/GeoJSONLayer",
         'esri/widgets/Legend'], function (Map, MapView,  Layer, GeoJSONLayer, Legend) {
        var map = new Map({
          basemap: "topo-vector"
        });
        
        var view = new MapView({
          map: map,
          container: "viewDiv",
          zoom: 2,
          center: [0, 0]
        });
  
        var countries_renderer = {
          type:"simple",
          symbol:{type:"simple-fill"},
          visualVariables: [{
            type: "color",
            field: "pctg_mil",
            stops: [{ value: 2.5, color: "#FF001F" },
          { value: 0, color: "#FFFFFF" }]
          }]
        }
        
        var popup_template = {
        title: "{sovereignt}",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "active_mil",
            label: "Active Military Personnel: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "tot_mil",
            label: "Total Military Personnel: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "pop_est",
            label: "Estimated Population: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "pctg_mil",
            label: "Population Percentage Military: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 2
            }
          }]
        }]
      };
  
        var countries = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/esuter19/final-project/main/md_data_export.json",
            renderer: countries_renderer,
            popupTemplate: popup_template
            });
        map.add(countries);
  
        
  
        const legend = new Legend({
          view: view
        });

        view.ui.add(legend, "bottom-left");
});
