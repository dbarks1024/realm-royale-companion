import React from 'react';
import {
  Scene,
  Router
} from 'react-native-router-flux';
import Leaderboards from './components/Leaderboards';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' >
        <Scene
        key='leaderboards' 
        component={Leaderboards} 
        title='Leaderboards'  
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
