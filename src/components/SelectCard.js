/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';
import Colors from './Colors';
import type {Node} from 'react';
import {Text, StyleSheet, ImageBackground, View, Dimensions} from 'react-native';
import React from 'react';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const Header = (): Node => (
	<View style={styles.container} >

	<ImageBackground

    source={require('./bgselection.png')}
    style={styles.background}
    imageStyle={styles.logo}>

    </ImageBackground>
	<Text style={styles.text}>Tienes una tarjeta <Text style={styles.dataBold}>Platinum</Text>,{'\n'}aprobada de <Text style={styles.dataBold}>$4,000</Text></Text>	
	</View>

);

const styles = StyleSheet.create({
    container: {
	flex: 1,
	justifyContent: 'center',
	height: (30*viewportHeight)/100,	
	backgroundColor: Colors.darkBlue,
	paddingTop: 80,
	alignItems: 'center'
	//    padding: 8,
  },
    background: {
	width: "100%",
	height: "100%",
	position:"absolute",
	bottom:0,
	padding:0,
	paddingVertical:-50,
/*

	justifyContent: 'center',
	alignItems: 'center'	
	*/
  },
  logo: {

      resizeMode: 'cover',

  },
    dataBold:{
	fontWeight: "bold",
    },
    text: {
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
      color: Colors.white,
      position: "absolute",
	top: 30,
	left:"25%",
//      padding:30,
  },
});

export default Header;
