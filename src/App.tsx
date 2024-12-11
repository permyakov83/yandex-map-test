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
    <>
      <div className='wrapper'>
        <div style={{ width: '600px', height: '400px' }}>
          <YMap location={reactify.useDefault(LOCATION)}>
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />

            <YMapMarker
              coordinates={reactify.useDefault([37.588144, 55.733842])}
            >
              <section>
                <div className='marker'></div>
              </section>
            </YMapMarker>
          </YMap>
        </div>
        <ul>
          <li className='item' onMouseOver={markerHover}>
            Первый маркер
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
