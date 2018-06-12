import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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

  render() {
    console.log(this.state);

    return (
      <View>
        <Text> Album List !!!! </Text>
        </View>
      );
    }
  }

export default AlbumList;
