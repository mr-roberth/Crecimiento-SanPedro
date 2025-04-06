var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_IMGSENTINEL2NDVI02ABRIL2025_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IMG SENTINEL2 NDVI -02/ABRIL/2025<br />\
    <img src="styles/legend/IMGSENTINEL2NDVI02ABRIL2025_1_0.png" /> 0.0000<br />\
    <img src="styles/legend/IMGSENTINEL2NDVI02ABRIL2025_1_1.png" /> 0.2500<br />\
    <img src="styles/legend/IMGSENTINEL2NDVI02ABRIL2025_1_2.png" /> 0.5000<br />\
    <img src="styles/legend/IMGSENTINEL2NDVI02ABRIL2025_1_3.png" /> 0.7500<br />\
    <img src="styles/legend/IMGSENTINEL2NDVI02ABRIL2025_1_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IMGSENTINEL2NDVI02ABRIL2025_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10832044.129737, 2048512.326364, -10572158.203129, 2239910.637635]
        })
    });
var format_CLASIFICACINDESUPERFICIE_2 = new ol.format.GeoJSON();
var features_CLASIFICACINDESUPERFICIE_2 = format_CLASIFICACINDESUPERFICIE_2.readFeatures(json_CLASIFICACINDESUPERFICIE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLASIFICACINDESUPERFICIE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASIFICACINDESUPERFICIE_2.addFeatures(features_CLASIFICACINDESUPERFICIE_2);
var lyr_CLASIFICACINDESUPERFICIE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASIFICACINDESUPERFICIE_2, 
                style: style_CLASIFICACINDESUPERFICIE_2,
                popuplayertitle: 'CLASIFICACIÓN DE SUPERFICIE',
                interactive: true,
    title: 'CLASIFICACIÓN DE SUPERFICIE<br />\
    <img src="styles/legend/CLASIFICACINDESUPERFICIE_2_0.png" /> COSECHADO<br />\
    <img src="styles/legend/CLASIFICACINDESUPERFICIE_2_1.png" /> DERIVADA<br />\
    <img src="styles/legend/CLASIFICACINDESUPERFICIE_2_2.png" /> EN PROCESO<br />\
    <img src="styles/legend/CLASIFICACINDESUPERFICIE_2_3.png" /> ENVIADO A OTROS INGENIOS (SIN AUTORIZACION)<br />\
    <img src="styles/legend/CLASIFICACINDESUPERFICIE_2_4.png" /> PENDIENTE<br />' });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_IMGSENTINEL2NDVI02ABRIL2025_1.setVisible(true);lyr_CLASIFICACINDESUPERFICIE_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_IMGSENTINEL2NDVI02ABRIL2025_1,lyr_CLASIFICACINDESUPERFICIE_2];
lyr_CLASIFICACINDESUPERFICIE_2.set('fieldAliases', {'INGENIO': 'INGENIO', 'AREA': 'AREA', 'ID CROPWISE': 'ID CROPWISE', 'ORDEN CORTE': 'ORDEN CORTE', 'NOMBRE DE PRODUCTOR': 'NOMBRE DE PRODUCTOR', 'SUPERFICIE ESTIMADA': 'SUPERFICIE ESTIMADA', 'TCH ESTIMADO': 'TCH ESTIMADO', 'TONELADAS ESTIMADAS': 'TONELADAS ESTIMADAS', 'SUPERFICIE COSECHADA': 'SUPERFICIE COSECHADA', 'TCH COSECHADO': 'TCH COSECHADO', 'TONELADAS COSECHADAS': 'TONELADAS COSECHADAS', 'MUNICPIO': 'MUNICPIO', 'COMUNIDAD': 'COMUNIDAD', 'PREDIO': 'PREDIO', 'POLIGONO': 'POLIGONO', 'VARIEDAD': 'VARIEDAD', 'CICLO': 'CICLO', 'ESTATUS DE COSECHA al 29/03/2025': 'ESTATUS DE COSECHA al 29/03/2025', 'ESTATUS NDVI': 'ESTATUS NDVI', 'COMENTARIOS': 'COMENTARIOS', 'VDALIDACIÃ“N FISICA 04/05/2025': 'VDALIDACIÃ“N FISICA 04/05/2025', 'COBERTURA NDVI SATELITAL': 'COBERTURA NDVI SATELITAL', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', });
lyr_CLASIFICACINDESUPERFICIE_2.set('fieldImages', {'INGENIO': 'TextEdit', 'AREA': 'TextEdit', 'ID CROPWISE': 'TextEdit', 'ORDEN CORTE': 'TextEdit', 'NOMBRE DE PRODUCTOR': 'TextEdit', 'SUPERFICIE ESTIMADA': 'TextEdit', 'TCH ESTIMADO': 'TextEdit', 'TONELADAS ESTIMADAS': 'TextEdit', 'SUPERFICIE COSECHADA': 'TextEdit', 'TCH COSECHADO': 'TextEdit', 'TONELADAS COSECHADAS': 'TextEdit', 'MUNICPIO': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'PREDIO': 'TextEdit', 'POLIGONO': 'TextEdit', 'VARIEDAD': 'TextEdit', 'CICLO': 'TextEdit', 'ESTATUS DE COSECHA al 29/03/2025': 'TextEdit', 'ESTATUS NDVI': 'TextEdit', 'COMENTARIOS': 'TextEdit', 'VDALIDACIÃ“N FISICA 04/05/2025': 'TextEdit', 'COBERTURA NDVI SATELITAL': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', 'field_28': 'TextEdit', });
lyr_CLASIFICACINDESUPERFICIE_2.set('fieldLabels', {'INGENIO': 'no label', 'AREA': 'no label', 'ID CROPWISE': 'no label', 'ORDEN CORTE': 'no label', 'NOMBRE DE PRODUCTOR': 'no label', 'SUPERFICIE ESTIMADA': 'no label', 'TCH ESTIMADO': 'no label', 'TONELADAS ESTIMADAS': 'no label', 'SUPERFICIE COSECHADA': 'no label', 'TCH COSECHADO': 'no label', 'TONELADAS COSECHADAS': 'no label', 'MUNICPIO': 'no label', 'COMUNIDAD': 'no label', 'PREDIO': 'no label', 'POLIGONO': 'no label', 'VARIEDAD': 'no label', 'CICLO': 'no label', 'ESTATUS DE COSECHA al 29/03/2025': 'no label', 'ESTATUS NDVI': 'no label', 'COMENTARIOS': 'no label', 'VDALIDACIÃ“N FISICA 04/05/2025': 'no label', 'COBERTURA NDVI SATELITAL': 'no label', 'field_23': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', 'field_26': 'hidden field', 'field_27': 'hidden field', 'field_28': 'hidden field', });
lyr_CLASIFICACINDESUPERFICIE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});