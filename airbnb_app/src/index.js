import React from 'react';

import Routes from './routes';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1Ijoic3RhbWF0b2dhYnJpZWwiLCJhIjoiY2pzejl5aWVkMTh0dTQzb2QyN3Y0aXlpbyJ9.hO8zg0usdW0yfsy3Y4JMJQ');
const App = () => <Routes />;

export default App;
