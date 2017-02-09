//Primeiro APP

 //Import library do help create a component
 import React from 'react';
//import ReactNative from 'react-native';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'; //Import from a file we created
import AlbumList from './src/components/AlbumList';

//Create a component
//JSX acucar sintatico pra JS. babelsjs.io converte de jsx para JS puro

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Available Albumsss'} />
		<AlbumList />
	</View>
 );

//Render it to the device
AppRegistry.registerComponent('albums3', () => App);
