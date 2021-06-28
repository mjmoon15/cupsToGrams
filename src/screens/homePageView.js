import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { Button } from '../components/touchableOpacity.js'
import MeasuringCupsAndSpoons from '../images/measuringCupsAndSpoons.png'


const styles = StyleSheet.create ({
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		// opacity: .2
	},
	buttonStyle: {
		borderWidth: 1, 
		borderColor: 'black', 
		borderRadius: 5
	},
	textStyle: {
		padding: 5, 
		alignContent: 'center', 
		justifyContent: 'center'
	}
})

const HomePageView = () => {
	return (
		<View style={{display: 'flex', flex: 1, flexDirection: 'column', marginTop: 45}}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30}}>
				<Button
					// onPress={console.log('recipes')}
					buttonStyle={styles.buttonStyle}
					textStyle={{...styles.textStyle, color: 'red'}}
					testID='recipeHomePageButton'
					accessibilityLabel='Recipes'
				>Recipes
				</Button>
				<Button
					// onPress={console.log('log in')}
					buttonStyle={styles.buttonStyle}
					textStyle={{...styles.textStyle, color: 'blue'}}
					testID='logInHomePageButton'
					accessibilityLabel='Log in'
				>Login
				</Button>
			</View>
			<View style={{flexDirection: 'column', flex: 1}}>
				<ImageBackground source={MeasuringCupsAndSpoons} style={styles.image}>
					<Button
						// onPress={console.log('convert')}
						buttonStyle={{
							...styles.buttonStyle,
							width: 75,
							marginLeft: 150,
							alignItems: 'center' 
						}}
						textStyle={{...styles.textStyle, color: 'black'}}
						testID='convertHomePageButton'
						accessibilityLabel='Convert!'
					>Convert!
					</Button>
				</ImageBackground>
			</View>
		</View>
	)
}

export default HomePageView


