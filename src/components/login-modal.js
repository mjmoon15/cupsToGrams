import React from 'react'
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native'

const LoginModal = () =>{
		
	return(
		<View styles={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
			<Modal
				animationType='slide'
				visible={showLoginModal}
				transparent={true}
				onRequestClose={()=>{
					showLoginModal(!loginModal)
				}}
			>
				<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
					<View style={{backgroundColor: 'black'}}>
						<Text style={{color: 'white'}}>Test</Text>
					</View>
				</View>
			</Modal>
		</View>
	)
}

export { LoginModal }