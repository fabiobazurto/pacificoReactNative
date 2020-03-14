import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ListView,

} from 'react-native';

import { Button } from 'react-native-elements';
import Colors from '../components/Colors';
import Header from '../components/Header';
import TextFormat from '../components/TextFormat';
import Layout from '../components/Layout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CodeInput from 'react-native-confirmation-code-input';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {bind} from '../utils/utils';
import {
    SafeAreaView,
    ImageBackground,
    ScrollView} from 'react-native';

const Stack = createStackNavigator();

class Confirmation extends Component {
    render() {
        return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.container}>

            {global.HermesInternal == null ? null : (
            <View style={styles.engine}>dfdf
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
            )}

              <View style={Layout.container}>
                <Text style={[TextFormat.mainTitleBlack,{color:Colors.darkBlue}]}>Clave transaccional</Text>
	        
		<View style={[Layout.row, Layout.textCenter, Layout.verticalSpacing]}>
		  <View style={[{width: "60%", height: 60, padding: 0 }, Layout.textCenter]} >
                    
		    <Text style={[{width:"100%"},TextFormat.paragraph, TextFormat.lightParagraph]}>Hemos enviado una clave al correo electronico que registraste fxxxxxx@gmail.com</Text>                    
	          </View>
	          <View style={Layout.col}>
                    <Icon  name='envelope' style={[styles.sicon,{color: Colors.darkBlue}]} size={40}  />
	          </View>
		</View>
              </View>


              <View style={[Layout.col,Layout.verticalSpacing, {paddingLeft:20, paddingRight:20,paddingBottom:40},Layout.textCenter]}>
                <CodeInput
                  ref="codeInputRef1"
                  keyboardType="numeric"
                  className={'border-b'}
                  activeColor={Colors.darkBlue}
                  inactiveColor={Colors.darkBlue}
                  codeLength={6}
                  codeInputStyle={{fontSize:20}}
                  inputPosition='left'
                  onFulfill={(code) => this.props.navigation.navigate('Congratulation')} />
              </View>
            </View>
               <View style={Layout.textCenter}>
                    <Text style={[TextFormat.secondaryTitleBlue]}>Solicitar nueva clave{'\n'}</Text>
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
    
});

const inputStyles = StyleSheet.create({
  container: {
    height: 20,
    marginRight: 25,
    marginLeft: 25,
    paddingTop: 25,
    paddingBottom: 25,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: '#b7c2c6',
    position: 'relative',
    overflow: 'hidden',
  },
  topMask: {
    height: 3,
    width: 9999,
    backgroundColor: 'white',
    position: 'absolute',
    top: -3,
    left: 0,
  },
  rightMask: {
    height: 9999,
    width: 3,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    right: -3,
  },
  leftMask: {
    height: 9999,
    width: 3,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: -3,
  },
});
export default Confirmation;
