import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { Button } from '../components/touchableOpacity.js'
import MeasuringCupsAndSpoons from '../images/measuringCupsAndSpoons.png'
import { LoginModal } from '../components/login-modal.js'


const styles = StyleSheet.create ({
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		// opacity: .2
	},
	buttonStyle: {
		borderWidth: 3, 
		borderColor: 'black', 
		borderRadius: 50,
		backgroundColor: 'black',
		alignItems: 'center'
	},
	textStyle: {
		padding: 5, 
		alignContent: 'center', 
		justifyContent: 'center'
	}
})

const HomePageView = () => {
	const [loginModal, showLoginModal] = useState(false)
	

	return (
		<View style={{display: 'flex', flex: 1, flexDirection: 'column', marginTop: 45}}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30}}>
				<Button
					// onPress={console.log('recipes')}
					buttonStyle={{...styles.buttonStyle}}
					textStyle={{...styles.textStyle, color: 'white'}}
					testID='recipeHomePageButton'
					accessibilityLabel='Recipes'
				>Recipes
				</Button>
				<Button
						// onPress={console.log('convert')}
						buttonStyle={{
							...styles.buttonStyle,
							width: 75,
						}}
						textStyle={{...styles.textStyle, color: 'white'}}
						testID='convertHomePageButton'
						accessibilityLabel='Convert!'
					>Convert!
					</Button>
			</View>
			<View style={{flexDirection: 'column', flex: 1}}>
				<ImageBackground source={MeasuringCupsAndSpoons} style={styles.image}>
					<Button
					onPress={() => showLoginModal(true)}
					buttonStyle={{...styles.buttonStyle, width: 75, marginLeft: 150}}
					textStyle={{...styles.textStyle, color: 'white'}}
					testID='logInHomePageButton'
					accessibilityLabel='Log in'
				>Login
				</Button>
				</ImageBackground>
			</View>
		</View>
	)
}

export default HomePageView


