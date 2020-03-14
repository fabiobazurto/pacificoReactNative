import React from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';
import Welcome from './Welcome';


const WelcomeTab = ({props}) => (
    <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: '',
            component: Welcome
        }}/>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WelcomeTab;
