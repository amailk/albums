import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//presentational component, so just functions
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
