import React from 'react';
import {Switch, Route  } from 'react-router-dom';


import Layout from './components/Layout';
import Home from './components/Home';
import GalleryWidget from './components/gallery';
import GalleryAddWidget from './components/gallery/add';
import GalleryAddCropperWidget from './components/gallery/addcropper/index';

function App() {
  return (
    <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={GalleryWidget} />
          <Route exact path='/gallery/add' component={GalleryAddWidget} />
          <Route exact path='/gallery/add/cropper' component={GalleryAddCropperWidget} /> 
        </Switch>
    </Layout>


  );
}

export default App;
