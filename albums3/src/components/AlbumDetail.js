import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ albumVar }) => {
	const { title, artist, thumbnail_image, image, url } = albumVar;
	const { headerContentStyle, thumbnailStyle, thumbnailContainerStyle,
		headerTextStyle, imageStyle, artistTextStyle } = styles;
	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
				</View>

				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{ title }</Text>
					<Text style={artistTextStyle}>{ artist }</Text>
				</View>
			</CardSection>

			<CardSection>
					<Image style={imageStyle} source={{ uri: image }} />
			</CardSection>

			<CardSection>
					<Button clicar={() => Linking.openURL(url)}>
							Comprar
					</Button>
			</CardSection>
		</Card>

	);
};

const styles = {
	headerContentStyle: {
		justifyContent: 'space-around',
		flexDirection: 'column'
	},

	headerTextStyle: {
		fontSize: 18,
		color: '#FFF'
	},

	artistTextStyle: {
		fontSize: 18,
		color: '#FF4500'
	},

	thumbnailStyle: {
		height: 50,
		width: 50
	},

	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	},

	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	}
};

export default AlbumDetail;
