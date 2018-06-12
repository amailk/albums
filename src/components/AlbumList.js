import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// borrow bunch of functionality from the base component class
// in a class need to define just one method - render method that returns
// some amount of JSX.
class AlbumList extends Component {
  //class level property
  state = { albums: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //only way we will update our component state, never say this.state = blah
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    //pass in an arrow function...called 5 times for each albums
    //whatever is returned
    //referencing javascript variable in curly braces.
    return this.state.albums.map(album =>
      //unique key,consistent across rerenders. (use an id if there is one)
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
      );
    }
  }

export default AlbumList;
