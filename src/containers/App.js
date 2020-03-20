/**
 * Pacificard Demo Fabio Bazurto
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component}  from 'react';
import { Button } from 'react-native-elements';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {bind} from './src/utils/utils';

import Colors from './src/components/Colors';
import Welcome from './src/containers/Welcome';
import Confirmation from './src/containers/Confirmation';
import Congratulation from './src/containers/Congratulation';


class App extends Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedTab: 'welcome'
        };
        bind(this)('_searchOnPress', '_employeesOnPress');
    }
    
    _employeesOnPress() {
        this.setState({
            selectedTab: 'welcome'
        })
    }
    
    _searchOnPress() {
        this.setState({
            selectedTab: 'search'
        })
    }

    callApi(){
        
           fetch('https://jsonplaceholder.typicode.com/photos')
    .then((result) => {
        return result.json();//.text();
    }).then((jsonResult) => {

        const jobject = jsonResult;//JSON.parse(jsonResult);
        let obj1 = jobject[jobject.length-1];
        let obj2 = jobject[jobject.length-2];        
        let album1 = `Album ${obj1.id}\n--title: ${obj1.title}\n--Url: ${obj2.url}`;
        let album2 = `Album2 ${obj2.id}\n--title: ${obj2.title}\n--Url: ${obj2.url}`;        
        alert(`${album1}\n ${album2}`);
    })
    }
    
     render() {
         return (
             <NavigationContainer>
               <Stack.Navigator initialRouteName="Welcome"
                                headerMode="screen"
                                screenOptions={{
                                    headerTintColor: Colors.darkBlue,
                                    headerStyle: { backgroundColor: Colors.darkBlue, elevation: 0, shadowOpacity: 0 },
                                    headerBackTitleVisible: true,
                  
                                }}>
                 <Stack.Screen name="Welcome"  component={Welcome}
                               options={{
                                   headerRight: () => (
                                       <Button
                                         onPress={() => this.callApi()}                                         
                                         icon={{
                                             name: 'close',
                                             type: 'font-awesome',
                                             size: 20,
                                             color: Colors.white,}}
                                         type="clear"
                                       />
                                   ),
                               }}/>
                 <Stack.Screen name="Confirmation" component={Confirmation}
                               options={{
                                   title:'Confirmación',
                                   headerTitleAlign:'center',
                                                     headerTintColor: Colors.white,
                                                     headerBackTitle:'Atrás',
                                                     headerBackTitleVisible:true,
                                                 }}

                 />
                 <Stack.Screen name="Congratulation" component={Congratulation}
                               options={{
                                   headerLeft: null,
                                   headerRight: () => (
					   <Button

                                         icon={{
                                             name: 'close',
                                             type: 'font-awesome',
                                             size: 20,
                                             color: Colors.white,}}
                                         type="clear"
                                       />
                                   ),
                               
                                   title:'Mastercard Clasica',
                                   headerTitleStyle:{color: Colors.white},
                                   headerTitleAlign:'center',
                                                     headerTintColor: Colors.darkBlue,
                                                     headerBackTitleVisible:false,
                                                 }}

                 />                 
               </Stack.Navigator>
             </NavigationContainer>             
        )
    }
    
}
/**
 * Right bar button on navigation bar
 */
const ShopButton = (title, onPress) => {
  return (
    <Button
        title={title}
        color={Colors.purple}
        backgroundColor='white'
        borderRadius={12}
        fontSize={11}
        buttonStyle={{paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8}}
        onPress={onPress} />
  )
}


const Stack = createStackNavigator();
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


export default App;
