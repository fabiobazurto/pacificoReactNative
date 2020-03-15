import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    StatusBar,
    ImageBackground,
    Dimensions,
    Image,
    Alert,
    TouchableOpacity,
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
            <SafeAreaView style={{backgroundColor: Colors.darkBlue,height:"100%"}}>
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
              <Text style={[TextFormat.normal,Layout.textCenter,TextFormat.lightText]}>Es un placer tenerte como cliente.</Text>              
            </View>

          <View style={[Layout.row, Layout.textCenter,styles.centrar]}>
		  <View style={[{width: "33%", height: 60, padding: 0 }, Layout.textCenter]} >
		    <Icon	    type='font-awesome'  name='envelope' size={30} style={styles.sicon}  />
	          </View>
		  <View style={[{width: "63%", height: 60, padding:0}]}>
                    <Text style={[TextFormat.lightParagraph, TextFormat.small,TextFormat.lightText, TextFormat.textLeft]}>Hemos enviado un correo a: givaregpar@gmail.com, para que conozcas todos los beneficios de tu tarjeta.</Text>
                  </View>
	  </View>

          <View style={[Layout.row, Layout.textCenter]}>
	    <View style={[{width: "33%", height: 40, padding: 0 }, Layout.textCenter]} >
	      <Icon	    type='font-awesome'  name='map-marker-alt' size={30} style={styles.sicon}  />
	    </View>
	    <View style={[{width: "63%", height: 40, padding:0}]}>
              <Text style={[TextFormat.lightParagraph, TextFormat.small,TextFormat.lightText, TextFormat.textLeft]}>Tu tarjeta de crédito será enviada a la dirección de correspondencia que proporcionaste.</Text>
            </View>
	  </View>

	  <View style={[headerStyle.footerContainer,{backgroundColor: Colors.footerBlue,marginTop:30}]} >

	        <ImageBackground
                  source={require('./bgfooot.png')}
                  style={headerStyle.backgroundFooter}
                  imageStyle={headerStyle.logoFooter}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Welcome') }>
                   
                  <Image
                    source={require('./footer.png')}
                    resizeMode="contain"
                    style={{width:"100%"}}/>
  </TouchableOpacity>
                  
                </ImageBackground>
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
        color:"#fff",
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
    scrollView:{
        flex:1,
    },
    container: {
	flex: 1,
	justifyContent: 'center',
	height: (40*viewportHeight)/100,	
	backgroundColor: Colors.darkBlue,
	paddingTop: 40,
	alignItems: 'center'
	//    padding: 8,
    },
   footerContainer: {
	flex: 1,
	justifyContent: 'center',
	height: (40*viewportHeight)/100,	
	backgroundColor: Colors.deepBlue,

	alignItems: 'center'
	//    padding: 8,
    },
    imageContainer: {
        marginTop: 30,
    //    height: viewportHeight * 0.9,
        width: viewportWidth,
    },    
    backgroundFooter:{
	width: "100%",
	height: "100%",
	position:"absolute",
	top:0,
	left:0,

        backgroundColor: Colors.footerBlue
    },
    logoFooter:{
        flex:1,
        resizeMode:'cover',
height: undefined,
    width: undefined        
    },
    background: {
	width: "100%",
	height: "100%",
	position:"absolute",
	bottom:0,
	padding:0,
	paddingVertical:-50,
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
