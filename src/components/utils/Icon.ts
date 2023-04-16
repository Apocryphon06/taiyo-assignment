import L from 'leaflet';

const iconPin = new L.Icon<any>({
    iconUrl: require('../assets/pin.svg'),
    iconRetinaUrl: require('../assets/pin.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPin };