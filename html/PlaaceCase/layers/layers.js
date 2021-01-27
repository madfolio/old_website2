var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.656000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AreasOfInterest_1 = new ol.format.GeoJSON();
var features_AreasOfInterest_1 = format_AreasOfInterest_1.readFeatures(json_AreasOfInterest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasOfInterest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasOfInterest_1.addFeatures(features_AreasOfInterest_1);
var lyr_AreasOfInterest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreasOfInterest_1, 
                style: style_AreasOfInterest_1,
                interactive: true,
                title: '<img src="styles/legend/AreasOfInterest_1.png" /> Areas Of Interest'
            });
var lyr_DailyPseudoFootfall_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "DailyPseudoFootfall",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DailyPseudoFootfall_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1185427.032140, 8376822.747500, 1204097.032140, 8389622.747500]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_AreasOfInterest_1.setVisible(true);lyr_DailyPseudoFootfall_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AreasOfInterest_1,lyr_DailyPseudoFootfall_2];
lyr_AreasOfInterest_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_AreasOfInterest_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_AreasOfInterest_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_AreasOfInterest_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});