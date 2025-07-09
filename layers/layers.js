var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_AreasconfusariumModelo_1 = new ol.format.GeoJSON();
var features_AreasconfusariumModelo_1 = format_AreasconfusariumModelo_1.readFeatures(json_AreasconfusariumModelo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasconfusariumModelo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasconfusariumModelo_1.addFeatures(features_AreasconfusariumModelo_1);
var lyr_AreasconfusariumModelo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasconfusariumModelo_1, 
                style: style_AreasconfusariumModelo_1,
                popuplayertitle: 'Areas con fusarium - Modelo',
                interactive: true,
                title: '<img src="styles/legend/AreasconfusariumModelo_1.png" /> Areas con fusarium - Modelo'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_AreasconfusariumModelo_1.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_AreasconfusariumModelo_1];
lyr_AreasconfusariumModelo_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FU_ingenio': 'FU_ingenio', 'FU_zona': 'FU_zona', 'FU_nombre_': 'FU_nombre_', 'FU_respons': 'FU_respons', 'FU_clave_a': 'FU_clave_a', 'FU_zafra': 'FU_zafra', 'FU_nombre': 'FU_nombre', 'FU_area_ta': 'FU_area_ta', 'FU_area_fu': 'FU_area_fu', 'FU_percent': 'FU_percent', 'FU_status_': 'FU_status_', 'FU_statu_1': 'FU_statu_1', 'FU_inspecc': 'FU_inspecc', });
lyr_AreasconfusariumModelo_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FU_ingenio': 'TextEdit', 'FU_zona': 'TextEdit', 'FU_nombre_': 'TextEdit', 'FU_respons': 'TextEdit', 'FU_clave_a': 'TextEdit', 'FU_zafra': 'TextEdit', 'FU_nombre': 'TextEdit', 'FU_area_ta': 'TextEdit', 'FU_area_fu': 'TextEdit', 'FU_percent': 'TextEdit', 'FU_status_': 'TextEdit', 'FU_statu_1': 'TextEdit', 'FU_inspecc': 'TextEdit', });
lyr_AreasconfusariumModelo_1.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'FU_ingenio': 'hidden field', 'FU_zona': 'hidden field', 'FU_nombre_': 'header label - always visible', 'FU_respons': 'header label - always visible', 'FU_clave_a': 'header label - always visible', 'FU_zafra': 'no label', 'FU_nombre': 'header label - always visible', 'FU_area_ta': 'header label - always visible', 'FU_area_fu': 'header label - always visible', 'FU_percent': 'header label - always visible', 'FU_status_': 'no label', 'FU_statu_1': 'no label', 'FU_inspecc': 'no label', });
lyr_AreasconfusariumModelo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});