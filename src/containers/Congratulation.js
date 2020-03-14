import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    StatusBar,
    ImageBackground,
    Dimensions

} from 'react-native';

import { Button } from 'react-native-elements';
import Colors from '../components/Colors';
import Header from '../components/Header';
import TextFormat from '../components/TextFormat';
import Layout from '../components/Layout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {bind} from '../utils/utils';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

import {
        SafeAreaView,
    ScrollView} from 'react-native';

class Congratulation extends Component {

    
    
    render() {
        return (
            <SafeAreaView style={{backgroundColor: Colors.darkBlue}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>            
	      <View style={headerStyle.container} >
                <StatusBar backgroundColor={ Colors.darkBlue} />
	        <ImageBackground
                  source={require('./bgfinal.png')}
                  style={headerStyle.background}
                  imageStyle={headerStyle.logo}>

                </ImageBackground>
	      </View>
	    <View style={[Layout.textCenter,Layout.row]} >          
            <Text style={[TextFormat.mainTitleBlack,Layout.textCenter, {color:Colors.white, fontSize: 30}]}>¡Felicidades!</Text>
            </View>
	    <View style={[Layout.textCenter,Layout.row]} >                        
              <Text style={[TextFormat.normal,Layout.textCenter, {color:Colors.white}]}>Es un placer tenerte como cliente.</Text>              
            </View>

 </ScrollView>
            </SafeAreaView>
	)    
    }
}


const styles = StyleSheet.create({
    centrar:{

        paddingTop: 40
    },
    col:{
	flex:1,
	paddingLeft:30,
	paddingRight:30,
    },
    finalButton:{
	paddingTop:40,
    },
    sicon:{
        color:"#CCC",
        width:"100%",
        height:"100%",
        textAlign:'center',
        //size:"50"
    }
    ,container:{
        backgroundColor:Colors.darkBlue
    }
    
});

const headerStyle = StyleSheet.create({
    container: {
	flex: 1,
	justifyContent: 'center',
	height: (40*viewportHeight)/100,	
	backgroundColor: Colors.darkBlue,
	paddingTop: 40,
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

export default Congratulation;
