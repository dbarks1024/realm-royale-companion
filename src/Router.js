import React from 'react';
import {
  Scene,
  Router
} from 'react-native-router-flux';
import Test from './components/Test';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' >
        <Scene
        key='test' 
        component={Test} 
        title='Test'  
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
