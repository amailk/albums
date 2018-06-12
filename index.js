// import a library to help create a componenet
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component(produce some content that appear on the mobile device)
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>

);

// render that component to the device(need to tell react native to place the
// component on the screen)
AppRegistry.registerComponent('albums', () => App);
