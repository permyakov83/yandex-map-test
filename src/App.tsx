import './App.css';
import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  reactify
} from './lib/ymap';
import type { YMapLocationRequest } from 'ymaps3';

const LOCATION: YMapLocationRequest = {
  center: [37.58, 55.73],
  zoom: 9
};

function App() {
  return (
    <div style={{ width: '600px', height: '400px' }}>
      <YMap location={reactify.useDefault(LOCATION)}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapMarker
          coordinates={reactify.useDefault([37.588144, 55.733842])}
          draggable={true}
        >
          <section>
            <h1>You can drag this header</h1>
          </section>
        </YMapMarker>
      </YMap>
    </div>
  );
}

export default App;
