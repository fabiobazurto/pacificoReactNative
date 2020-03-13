/**
 * Pacificard Demo Fabio Bazurto
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component}  from 'react';
import {
    SafeAreaView,
    Button,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import Header from '../components/Header';
import Colors from '../components/Colors';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>dfdf
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>

            <Text style={styles.selectionSection}>Selecciona la marca de tarjeta que prefieras </Text>
	    <View style={styles.fixToText}>
              <Button
            title="Mastercard"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Visa"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
            
	  
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  selectionSection: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
      color: Colors.dark,
      textAlign: 'center',
  },
    highlight: {
	fontWeight: '700',
    },
    fixToText: {
	flexDirection: 'row',
	justifyContent: 'space-around',
    },
    footer: {
	color: Colors.dark,
	fontSize: 12,
	fontWeight: '600',
	padding: 4,
	paddingRight: 12,
	textAlign: 'right',
    },
});

export default App;
