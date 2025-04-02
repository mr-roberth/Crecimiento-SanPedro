var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_IngenioSanPedro_1 = new ol.format.GeoJSON();
var features_IngenioSanPedro_1 = format_IngenioSanPedro_1.readFeatures(json_IngenioSanPedro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IngenioSanPedro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IngenioSanPedro_1.addFeatures(features_IngenioSanPedro_1);
var lyr_IngenioSanPedro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IngenioSanPedro_1, 
                style: style_IngenioSanPedro_1,
                popuplayertitle: 'Ingenio - San Pedro',
                interactive: true,
    title: 'Ingenio - San Pedro<br />\
    <img src="styles/legend/IngenioSanPedro_1_0.png" /> COSECHADO<br />\
    <img src="styles/legend/IngenioSanPedro_1_1.png" /> ENVIADO A OTROS INGENIOS (SIN AUTORIZACION)<br />\
    <img src="styles/legend/IngenioSanPedro_1_2.png" /> PENDIENTE<br />' });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_IngenioSanPedro_1.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_IngenioSanPedro_1];
lyr_IngenioSanPedro_1.set('fieldAliases', {'Division': 'Division', 'Zona': 'Zona', 'NombreZona': 'NombreZona', 'Area': 'Area', 'Comunidad': 'Comunidad', 'Predio': 'Predio', 'Area2': 'Area2', 'Poligono': 'Poligono', 'Orden': 'Orden', 'Inicio': 'Inicio', 'Fin': 'Fin', 'Contrato': 'Contrato', 'NombreProductor': 'NombreProductor', 'Ciclo': 'Ciclo', 'CicloN': 'CicloN', 'Variedad': 'Variedad', 'Lote': 'Lote', 'Superficie_est': 'Superficie_est', 'rto_est': 'rto_est', 'Toneladas_est': 'Toneladas_est', 'Superficie_der': 'Superficie_der', 'Toneladas_der': 'Toneladas_der', 'rto_der': 'rto_der', 'Superficie_cos': 'Superficie_cos', 'Toneladas_cos': 'Toneladas_cos', 'rto_cos': 'rto_cos', 'Kms': 'Kms', 'Acarreo': 'Acarreo', 'FechaSoD': 'FechaSoD', 'FechaFer': 'FechaFer', 'Frente': 'Frente', 'Ingenio': 'Ingenio', 'Origen': 'Origen', 'TipoEst': 'TipoEst', 'AgrupCan': 'AgrupCan', 'Vigencia': 'Vigencia', 'Tipo Productor': 'Tipo Productor', 'Tipo_alta': 'Tipo_alta', 'Entrega': 'Entrega', 'Municipio': 'Municipio', 'Tipo CaÃ±eros': 'Tipo CaÃ±eros', 'COSECHADO': 'COSECHADO', });
lyr_IngenioSanPedro_1.set('fieldImages', {'Division': 'TextEdit', 'Zona': 'TextEdit', 'NombreZona': 'TextEdit', 'Area': 'TextEdit', 'Comunidad': 'TextEdit', 'Predio': 'TextEdit', 'Area2': 'TextEdit', 'Poligono': 'TextEdit', 'Orden': 'TextEdit', 'Inicio': 'TextEdit', 'Fin': 'TextEdit', 'Contrato': 'TextEdit', 'NombreProductor': 'TextEdit', 'Ciclo': 'TextEdit', 'CicloN': 'TextEdit', 'Variedad': 'TextEdit', 'Lote': 'TextEdit', 'Superficie_est': 'TextEdit', 'rto_est': 'TextEdit', 'Toneladas_est': 'TextEdit', 'Superficie_der': 'TextEdit', 'Toneladas_der': 'TextEdit', 'rto_der': 'TextEdit', 'Superficie_cos': 'TextEdit', 'Toneladas_cos': 'TextEdit', 'rto_cos': 'TextEdit', 'Kms': 'TextEdit', 'Acarreo': 'TextEdit', 'FechaSoD': 'TextEdit', 'FechaFer': 'TextEdit', 'Frente': 'TextEdit', 'Ingenio': 'TextEdit', 'Origen': 'TextEdit', 'TipoEst': 'TextEdit', 'AgrupCan': 'TextEdit', 'Vigencia': 'TextEdit', 'Tipo Productor': 'TextEdit', 'Tipo_alta': 'TextEdit', 'Entrega': 'TextEdit', 'Municipio': 'TextEdit', 'Tipo CaÃ±eros': 'TextEdit', 'COSECHADO': 'TextEdit', });
lyr_IngenioSanPedro_1.set('fieldLabels', {'Division': 'no label', 'Zona': 'no label', 'NombreZona': 'no label', 'Area': 'header label - always visible', 'Comunidad': 'no label', 'Predio': 'no label', 'Area2': 'no label', 'Poligono': 'no label', 'Orden': 'no label', 'Inicio': 'no label', 'Fin': 'no label', 'Contrato': 'no label', 'NombreProductor': 'no label', 'Ciclo': 'no label', 'CicloN': 'no label', 'Variedad': 'header label - always visible', 'Lote': 'no label', 'Superficie_est': 'no label', 'rto_est': 'no label', 'Toneladas_est': 'no label', 'Superficie_der': 'no label', 'Toneladas_der': 'no label', 'rto_der': 'no label', 'Superficie_cos': 'header label - always visible', 'Toneladas_cos': 'header label - always visible', 'rto_cos': 'header label - always visible', 'Kms': 'no label', 'Acarreo': 'no label', 'FechaSoD': 'no label', 'FechaFer': 'no label', 'Frente': 'no label', 'Ingenio': 'no label', 'Origen': 'no label', 'TipoEst': 'no label', 'AgrupCan': 'no label', 'Vigencia': 'no label', 'Tipo Productor': 'no label', 'Tipo_alta': 'no label', 'Entrega': 'no label', 'Municipio': 'no label', 'Tipo CaÃ±eros': 'no label', 'COSECHADO': 'no label', });
lyr_IngenioSanPedro_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});