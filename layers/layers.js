var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_IngenioModeloSuperficiecondaodefusarium_1 = new ol.format.GeoJSON();
var features_IngenioModeloSuperficiecondaodefusarium_1 = format_IngenioModeloSuperficiecondaodefusarium_1.readFeatures(json_IngenioModeloSuperficiecondaodefusarium_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IngenioModeloSuperficiecondaodefusarium_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IngenioModeloSuperficiecondaodefusarium_1.addFeatures(features_IngenioModeloSuperficiecondaodefusarium_1);
var lyr_IngenioModeloSuperficiecondaodefusarium_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IngenioModeloSuperficiecondaodefusarium_1, 
                style: style_IngenioModeloSuperficiecondaodefusarium_1,
                popuplayertitle: 'Ingenio Modelo - Superficie con daño de fusarium',
                interactive: true,
    title: 'Ingenio Modelo - Superficie con daño de fusarium<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_0.png" /> 44.92016003<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_1.png" /> 47.05526214<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_2.png" /> 49.42026864<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_3.png" /> 51.20874933<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_4.png" /> 51.80339951<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_5.png" /> 52.79572411<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_6.png" /> 54.70250121<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_7.png" /> 55.79773069<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_8.png" /> 55.86870392<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_9.png" /> 55.98909439<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_10.png" /> 60.14195449<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_11.png" /> 62.5483871<br />\
    <img src="styles/legend/IngenioModeloSuperficiecondaodefusarium_1_12.png" /> <br />' });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_IngenioModeloSuperficiecondaodefusarium_1.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_IngenioModeloSuperficiecondaodefusarium_1];
lyr_IngenioModeloSuperficiecondaodefusarium_1.set('fieldAliases', {'Fecha': 'Fecha', 'Ejido': 'Ejido', 'GPS': 'GPS', 'ID_Cropwis': 'ID_Cropwis', 'Multipolig': 'Multipolig', 'Multi': 'Multi', 'Clave': 'Clave', 'Productor': 'Productor', 'FECHA ORDE': 'FECHA ORDE', 'EDAD': 'EDAD', 'Brix Super': 'Brix Super', 'Brix Sup_1': 'Brix Sup_1', 'Brix Infer': 'Brix Infer', 'Brix Inf_1': 'Brix Inf_1', 'Brix prome': 'Brix prome', 'Total m1': 'Total m1', 'Total m2': 'Total m2', 'Daño': 'Daño', 'Daño#': 'Daño#', 'ndvi_media': 'ndvi_media', 'ndre_media': 'ndre_media', 'Desbalance': 'Desbalance', 'NDVI_norml': 'NDVI_norml', 'NDRE_norma': 'NDRE_norma', 'Brix_norma': 'Brix_norma', 'ICD (Indic': 'ICD (Indic', 'Daño_%': 'Daño_%', '%': '%', });
lyr_IngenioModeloSuperficiecondaodefusarium_1.set('fieldImages', {'Fecha': 'TextEdit', 'Ejido': 'TextEdit', 'GPS': 'TextEdit', 'ID_Cropwis': 'TextEdit', 'Multipolig': 'TextEdit', 'Multi': 'TextEdit', 'Clave': 'TextEdit', 'Productor': 'TextEdit', 'FECHA ORDE': 'TextEdit', 'EDAD': 'TextEdit', 'Brix Super': 'TextEdit', 'Brix Sup_1': 'TextEdit', 'Brix Infer': 'TextEdit', 'Brix Inf_1': 'TextEdit', 'Brix prome': 'TextEdit', 'Total m1': 'TextEdit', 'Total m2': 'TextEdit', 'Daño': 'TextEdit', 'Daño#': 'TextEdit', 'ndvi_media': 'TextEdit', 'ndre_media': 'TextEdit', 'Desbalance': 'TextEdit', 'NDVI_norml': 'TextEdit', 'NDRE_norma': 'TextEdit', 'Brix_norma': 'TextEdit', 'ICD (Indic': 'TextEdit', 'Daño_%': 'TextEdit', '%': 'TextEdit', });
lyr_IngenioModeloSuperficiecondaodefusarium_1.set('fieldLabels', {'Fecha': 'no label', 'Ejido': 'no label', 'GPS': 'no label', 'ID_Cropwis': 'no label', 'Multipolig': 'no label', 'Multi': 'no label', 'Clave': 'no label', 'Productor': 'no label', 'FECHA ORDE': 'no label', 'EDAD': 'no label', 'Brix Super': 'no label', 'Brix Sup_1': 'no label', 'Brix Infer': 'no label', 'Brix Inf_1': 'no label', 'Brix prome': 'no label', 'Total m1': 'no label', 'Total m2': 'no label', 'Daño': 'no label', 'Daño#': 'no label', 'ndvi_media': 'no label', 'ndre_media': 'no label', 'Desbalance': 'no label', 'NDVI_norml': 'no label', 'NDRE_norma': 'no label', 'Brix_norma': 'no label', 'ICD (Indic': 'no label', 'Daño_%': 'no label', '%': 'inline label - always visible', });
lyr_IngenioModeloSuperficiecondaodefusarium_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});