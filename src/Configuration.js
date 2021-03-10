import Leaflet from 'leaflet'
import { Locally_listed_Popup, Statutory_listed_Popup, Conservation_area_Popup, Article4_1_direction_Popup, Article4_2_direction_Popup, Scheduled_monument_Popup, Historic_Parks_Gardens_Popup } from './Popups'
import { Locally_listed_style, Statutory_listed_style, Contaminated_land_style, Article4_1_direction_style, Article4_2_direction_style, Scheduled_monument_style, Historic_parks_gardens_style, statutorylistedpointsStyle, locallylistedpointsStyle, Scheduled_monument_points_style } from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 12,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true,
        Class: 'govuk-grid-column-full smbc-map__container',
    },
    DynamicData: 
    [
        {
            key: 'os1250_line',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        
        {
            key: 'Possible Contaminated Land',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:contamination_possible&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Conservation_area_Popup,
                maxZoom: 2,
                style: Contaminated_land_style
            },
            displayOverlay: true,
            visibleByDefault: true
        }       
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ],
}

export default Configuration