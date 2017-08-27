import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  Jane,
  JaneLayer,
  Source,
  MapLayer,
  Legend,
  Marker
} from 'jane-maps';

injectTapEventPlugin();

const featureSource = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [-74.0083, 40.7121]
      }
    }
  ]
};

const markerFeature = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Point',
    coordinates: [-74.00390625, 40.71499673906409]
  }
};

const DummyComponent = () => (
  <div style={{
    padding: '15px'
  }}>Dummy Layer</div>
);

const onFClick= (feat) =>{
  alert("you clicked me");
}
const JaneExample = () => {
  const mapboxGLOptions = {
    mapbox_accessToken: 'pk.eyJ1IjoiY3dob25nbnljIiwiYSI6ImNpczF1MXdrdjA4MXcycXA4ZGtyN2x5YXIifQ.3HGyME8tBs6BnljzUVIt4Q',
    center: [
      -74.0084, 40.7121
    ],
    zoom: 13.62,
    minZoom: 9,
    maxZoom: null,
    pitch: 0,
    hash: false,
    navigationControlPosition: 'bottom-right'
  };

  const searchConfig = {
    mapzen_api_key: 'mapzen-ZyMEp5H',
    bounds: {
      minLon: -74.292297,
      maxLon: -73.618011,
      minLat: 40.477248,
      maxLat: 40.958123
    }
  };

  return (
    <MuiThemeProvider>
      <div style={{
        height: '500px',
        width: '500px'
      }}>
        <Jane mapboxGLOptions={mapboxGLOptions}>
          <JaneLayer id="feature" name="Feature" icon="university" defaultSelected component={< DummyComponent />}>

            <Source id="feature" type="geojson" data={featureSource}/>

            <MapLayer id="feature" source="feature" type="circle" paint={{
              'circle-radius': 10,
              'circle-color': 'steelblue',
              'circle-opacity': 0.7
            }}/>

            <Marker label="Example Marker" feature={markerFeature}/>

          </JaneLayer>

        </Jane>
      </div>
    </MuiThemeProvider>
  );
};

ReactDOM.render(
  <JaneExample/>, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}
