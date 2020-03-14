import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
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

import Icon from 'react-native-vector-icons/FontAwesome5';
import {bind} from '../utils/utils';
import {
        SafeAreaView,
    ScrollView} from 'react-native';



class Welcome extends Component {
    render() {
        return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.container}>
            <Header />
            {global.HermesInternal == null ? null : (
            <View style={styles.engine}>dfdf
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
            )}

              <View >
	        <Text style={[TextFormat.normal,TextFormat.textCenter, Layout.verticalSpacing]}>Selecciona la marca de tarjeta que prefieras </Text>
		<View style={[Layout.row, Layout.textCenter,Layout.verticalSpacing]}>
	          <View style={Layout.col}>
                    
                    <Button   title="Mastercard"  type="outline"   icon={{
                  name: 'cc-mastercard',
                  type: 'font-awesome',
                  size: 20,
                  color: 'orange',
                }}
                iconLeft
                iconContainerStyle={{ marginLeft: 10 }}/>
                    
	          </View>
	          <View style={Layout.col}>
                    <Button  title="Visa"  type="outline" icon={{
                  name: 'cc-visa',
                  type: 'font-awesome',
                  size: 20,
                  color: Colors.darkBlue,
                }}
                iconLeft
                iconContainerStyle={{ marginLeft: 10 }}/>

	          </View>
		</View>
		<View style={[Layout.verticalSpacing, Layout.card]}>
                  <Text style={TextFormat.mainTitleBlack}>Mastercard Platinum</Text>                  
                </View>
		<View style={[Layout.rowcol,Layout.verticalSpacing, Layout.card]}>
		  <Text style={[TextFormat.paragraph, TextFormat.lightParagraph]}>Obten el beneficio y prestigio que ofrece una tarjeta Mastercard, junto al más variado financiamiento, a     través de la exclusiva Mastercard Plantinum.</Text>
                </View>

                <View style={[Layout.row, Layout.textCenter, styles.centrar]}>
		  <View style={[{width: "33%", height: 60, padding: 0 }, Layout.textCenter]} >
		    <Icon	    type='font-awesome'  name='plane' size={40} style={styles.sicon}  />
                    <Text style={[TextFormat.lightParagraph, TextFormat.small, TextFormat.textCenter]}>Acumulacion de millas</Text>
	          </View>
		  <View style={[{width: "33%", height: 60, padding:0}, Layout.textCenter]}>
	            <Icon	    name='lock' style={styles.sicon} size={40} />
                    <Text style={[TextFormat.lightParagraph, TextFormat.small, TextFormat.textCenter]}>Proteccion de compras</Text>
                  </View>
                  <View style={[{width: "33%", height: 60, padding:0},Layout.textCenter]}>
                    <Icon  name='truck-moving'style={styles.sicon} size={40}  />
                    <Text style={[TextFormat.lightParagraph, TextFormat.small, TextFormat.textCenter]}>Pacificard {'\n'} Box</Text>                    
                  </View>
		</View>
	        <View style={[styles.finalButton,Layout.verticalSpacing, styles.col]}>
		  <View style={Layout.textCenter}>
                    <Text style={[TextFormat.secondaryTitleBlue]}>Conoce más beneficios{'\n'}</Text>
                  </View>
                  <Button  title="Aceptar tarjeta" style={Layout.row}
                   onPress={() => this.props.navigation.navigate('Confirmation')}/>
	        </View>
              </View>
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


export default Welcome;
