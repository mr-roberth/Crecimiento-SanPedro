var size = 0;
var placement = 'point';
function categories_CLASIFICACINDESUPERFICIE_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'COSECHADO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,189,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'DERIVADA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EN PROCESO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,219,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ENVIADO A OTROS INGENIOS (SIN AUTORIZACION)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,0,154,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PENDIENTE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,8,8,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CLASIFICACINDESUPERFICIE_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("VDALIDACIÃ“N FISICA 04/05/2025");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_CLASIFICACINDESUPERFICIE_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
